"use client";

import React, { useState, useEffect } from "react";
import ProfileBar from "./ProfileBar";
import HeaderBar from "./HeaderBar";
import profileImg from "../../../public/images/profileImg.png";
import Image from "next/image";
import { BsCamera } from "react-icons/bs";
import { Country, City, ICity, ICountry } from "country-state-city";
import {
  getUserById,
  updateUserProfile,
  getAbout,
  createAbout,
  updateAbout,
  getCompany,
  createCompany,
  updateCompany,
} from "@/app/services/useraccount.service";

const ProfileDetails = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  // Editable fields
  const [userId, setUserId] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [aboutText, setAboutText] = useState<string>("");
  const [companyText, setCompanyText] = useState<string>("");

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);
  const [originalData, setOriginalData] = useState<any>({});

  // Section control
  const [editableSection, setEditableSection] = useState<string | null>(null);

  // Load user details, About, and Company
  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const userData = await getUserById();
      if (userData) {
        setUserId(userData.id);
        setFirstName(userData.firstName || "");
        setLastName(userData.lastName || "");
        setEmail(userData.email || "");
        setPhoneNumber(userData.phoneNumber || "");
        setPreviewImage(
          userData.profileImagePath
            ? "http://bisuite.somee.com/" + userData.profileImagePath
            : ""
        );

        if (userData.country) {
          setSelectedCountry(userData.country);
          const countryObj = Country.getAllCountries().find(
            (c) => c.name.toLowerCase() === userData.country.toLowerCase()
          );
          if (countryObj) {
            const cityList = City.getCitiesOfCountry(countryObj.isoCode) || [];
            setCities(cityList);
          }
          if (userData.city) setSelectedCity(userData.city);
        }

        // Save original values
        setOriginalData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          email: userData.email || "",
          phoneNumber: userData.phoneNumber || "",
          country: userData.country || "",
          city: userData.city || "",
          aboutText: "",
          companyText: "",
          profileImagePath: userData.profileImagePath || "",
        });
      }

      if (userData?.id) {
        const aboutData = await getAbout(userData.id);
        if (aboutData && aboutData.ABout) {
          setAboutText(aboutData.ABout);
          setOriginalData((prev: any) => ({
            ...prev,
            aboutText: aboutData.ABout,
          }));
        }

        const companyData = await getCompany(userData.id);
        if (companyData && companyData.Company) {
          setCompanyText(companyData.Company);
          setOriginalData((prev: any) => ({
            ...prev,
            companyText: companyData.Company,
          }));
        }
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  const countries: ICountry[] = Country.getAllCountries();

  const handleCountryChange = (countryCode: string) => {
    const countryObj = Country.getCountryByCode(countryCode);
    if (countryObj) {
      setSelectedCountry(countryObj.name);
      const cityList = City.getCitiesOfCountry(countryObj.isoCode) || [];
      setCities(cityList);
      setSelectedCity("");
    }
  };

  // ✅ Restrict Image Size (max 2MB)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // 2 MB = 2 * 1024 * 1024 = 2097152
      if (file.size > 2 * 1024 * 1024) {
        alert("Only images up to 2MB are allowed ❌");
        e.target.value = ""; // reset file input
        return;
      }

      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const resetToOriginal = () => {
    // Reset all fields to original values
    setFirstName(originalData.firstName);
    setLastName(originalData.lastName);
    setEmail(originalData.email);
    setPhoneNumber(originalData.phoneNumber);
    setSelectedCountry(originalData.country);
    setSelectedCity(originalData.city);
    setAboutText(originalData.aboutText);
    setCompanyText(originalData.companyText);
    setProfileImage(null);
    setPreviewImage(
      originalData.profileImagePath
        ? "http://localhost:11969/" + originalData.profileImagePath
        : ""
    );
  };

  const handleCancel = () => {
    resetToOriginal();
    setEditableSection(null);
  };

  const handleUpdate = async () => {
    if (!userId) {
      alert("User ID missing");
      return;
    }

    let success = false;

    const profileResult = await updateUserProfile(
      userId,
      firstName,
      lastName,
      email,
      phoneNumber,
      selectedCity,
      selectedCountry,
      profileImage || undefined
    );
    success = !!profileResult;

    let aboutResult = await updateAbout(userId, aboutText);
    if (!aboutResult) aboutResult = await createAbout(userId, aboutText);

    let companyResult = await updateCompany(userId, companyText);
    if (!companyResult) companyResult = await createCompany(userId, companyText);

    if (success || aboutResult || companyResult) {
      alert("Profile updated successfully ✅");
      // update original values so cancel will restore new saved data
      setOriginalData({
        firstName,
        lastName,
        email,
        phoneNumber,
        country: selectedCountry,
        city: selectedCity,
        aboutText,
        companyText,
        profileImagePath: profileImage
          ? previewImage
          : originalData.profileImagePath,
      });
    } else {
      alert("Failed to update profile ❌");
    }
    setEditableSection(null);
  };

  // Toggle section editing
  const toggleSection = (section: string) => {
    if (editableSection === section) {
      // cancel if clicking again
      resetToOriginal();
      setEditableSection(null);
    } else {
      setEditableSection(section);
    }
  };

  if (loading) {
    return <p className="text-center py-10">Loading user details...</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <ProfileBar activeBar="Personal Info" />

      {/* Account Info Section */}
      <section className="flex-col bg-white shadow-md rounded-md">
        <HeaderBar
          headerTitle="Account Info"
          isEditable={editableSection === "account"}
          onEdit={() => toggleSection("account")}
        />
        <div className="px-2 sm:px-4 md:px-4 lg:px-8 py-2">
          {/* Profile Picture */}
          <label className="flex items-center gap-2 py-2 text-lightgray">
            Profile Picture
          </label>
          <div className="flex flex-col md:flex-row items-center gap-2 px-4 py-2 text-lightgray border border-[#ECECEC] rounded-md">
            <div className="w-full md:w-1/2 lg:w-1/4">
              <section className="flex justify-center items-center">
                <div className="w-24 h-24 sm:w-[178px] sm:h-[178px] rounded-full relative">
                  <Image
                    src={previewImage || profileImg}
                    alt="Profile"
                    width={178}
                    height={178}
                    className="w-24 h-24 sm:w-[178px] sm:h-[178px] rounded-full object-cover"
                    priority
                  />
                  {editableSection === "account" && (
                    <label className="absolute top-1/2 -right-4 bg-textThemeClr p-2 md:p-3 lg:p-4 border-2 md:border-4 border-white rounded-full cursor-pointer">
                      <BsCamera className="text-sm sm:text-base md:text-xl lg:text-2xl text-white " />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </section>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/4 flex items-center">
              <h3 className="text-xs md:text-sm">
                Allowed JPG, GIF or PNG. Max size of 2MB
              </h3>
            </div>
          </div>

          {/* First + Last Name */}
          <section className="flex flex-col md:flex-row gap-x-5 gap-y-2">
            <div className="w-full md:w-1/2 flex flex-col py-2">
              <label className="text-lightgray py-1">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="px-2 py-3 rounded-md border border-bordergray"
                disabled={editableSection !== "account"}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col py-2">
              <label className="text-lightgray py-1">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="px-2 py-3 rounded-md border border-bordergray"
                disabled={editableSection !== "account"}
              />
            </div>
          </section>

          {/* Email + Phone */}
          <section className="flex flex-col md:flex-row gap-x-5 gap-y-2">
            <div className="w-full md:w-1/2 flex flex-col py-2">
              <label className="text-lightgray py-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-2 py-3 rounded-md border border-bordergray"
                disabled={editableSection !== "account"}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col py-2">
              <label className="text-lightgray py-1">Contact Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="px-2 py-3 rounded-md border border-bordergray"
                disabled={editableSection !== "account"}
              />
            </div>
          </section>

          {/* Country + City */}
          <section className="flex flex-col md:flex-row gap-x-5 gap-y-2">
            <div className="w-full md:w-1/2 flex flex-col py-2">
              <label className="text-lightgray py-1">Country</label>
              <select
                className="w-full px-2 py-3 border border-bordergray rounded-md"
                value={
                  countries.find((c) => c.name === selectedCountry)?.isoCode || ""
                }
                onChange={(e) => handleCountryChange(e.target.value)}
                disabled={editableSection !== "account"}
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c.isoCode} value={c.isoCode}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/2 flex flex-col py-2">
              <label className="text-lightgray py-1">City</label>
              <select
                className="w-full px-2 py-3 border border-bordergray rounded-md"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={editableSection !== "account"}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </section>
        </div>
      </section>

      {/* About */}
      <section className="flex-col bg-white shadow-md rounded-md">
        <HeaderBar
          headerTitle="About"
          isEditable={editableSection === "about"}
          onEdit={() => toggleSection("about")}
        />
        <textarea
          className="w-full px-4 py-2 my-0 border border-bordergray rounded-md"
          placeholder="Write something about yourself..."
          rows={4}
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
          disabled={editableSection !== "about"}
        />
      </section>

      {/* Company */}
      <section className="flex-col bg-white shadow-md rounded-md">
        <HeaderBar
          headerTitle="Company details"
          isEditable={editableSection === "company"}
          onEdit={() => toggleSection("company")}
        />
        <textarea
          className="w-full px-4 py-2 my-0 border border-bordergray rounded-md"
          placeholder="Add your company details here..."
          rows={4}
          value={companyText}
          onChange={(e) => setCompanyText(e.target.value)}
          disabled={editableSection !== "company"}
        />
      </section>

      {/* Save + Cancel */}
      {editableSection && (
        <section className="flex flex-col sm:flex-row gap-4 my-5">
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-textThemeClr rounded-md px-4 py-2 text-white"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-white border border-bordergray rounded-md px-4 py-2"
          >
            Cancel
          </button>
        </section>
      )}
    </div>
  );
};

export default ProfileDetails;
