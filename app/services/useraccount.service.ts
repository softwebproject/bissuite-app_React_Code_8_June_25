type AuthResponse = {    
    accessToken: string;
    firstName: string;
    lastName: string;
  };

  export type ContactUsInfo = {    
    name: string;
    email: string;
    message: string;
  }

  export type BMC = {    
    frameworkId: string;
    title: string;
    keyPartners: string[];
    keyActivities: string[];
    keyResources: string[];
    keyPropositions: string[];
    keyRelationships: string[];
    keyChannels: string[];
    keySegment: string[];
    keyStructure: string[];
    keyStreams: string[];
  }
  
  export type SWOTResponse = {    
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  }

  export type TWOSResponse = {    
    sO_Strategies: string[];
    sT_Strategies: string[];
    wO_Strategies: string[];
    wT_Strategies: string[];
  }

  export type LMC = {    
    frameworkId: string;
    title: string;
    problem: string[];
    solution: string[];
    uniqueValueProposition: string[];
    unfairAdvantage: string[];
    customerSegments: string[];    
    keyMetrics: string[];
    channels: string[];
    costStructure: string[];
    revenueStreams: string[];
  }
  export interface CanvasList {
    id: string;
    title: string;
  }
  //const domainURL='https://edianalytica.com/api/';
  //const domainURL='http://localhost:11969/api/';
const domainURL='http://bisuite.somee.com/api/';
  export interface RootEnvironmentalAnalysis {
    EnvironmentalAnalysis: EnvironmentalAnalysis
  }
  
  export interface EnvironmentalAnalysis {
    keyTrends: KeyTrends
    industryForces: IndustryForces
    marketForces: MarketForces
    macroeconomics: Macroeconomics
  }
  
  export interface KeyTrends {
    regulatoryTrends: string
    societalAndCulturalTrends: string
    technologyTrends: string
    socioEconomicTrends: string
  }
  
  export interface IndustryForces {
    suppliersAndValueChainActors: string
    stakeholders: string
    competitorsIncumbents: string
    newEntrantsInsurgents: string
    substituteProductsAndServices: string
  }
  
  export interface MarketForces {
    marketSegments: string
    needsAndDemands: string
    marketIssues: string
    switchingCosts: string
    revenueAttractiveness: string
  }
  
  export interface Macroeconomics {
    globalMarketConditions: string
    capitalMarketsCommoditiesAndResources: string
    economicInfrastructureTrends: string
  }
  
  export function alertConnectionError()
  {
    alert("Connection error. Please try after some time or conctact admin for support.");
  }

  export function getElementData(preFix: string,id: string)
  {
    const storedValue=localStorage.getItem(preFix+id);
    if(storedValue != null && storedValue.length > 5)
    { 
      return storedValue;
    }  
    return 'N/A';
  } 

  export function setElementData(preFix: string,id: string, value: string)
  {
    localStorage.setItem(preFix+id,value);    
  } 

  export function showSpinner()
  {    
    if (typeof window !== 'undefined' && window.document) {      
     const dvSpinner= window.document.getElementById("dvSpinner");
     if(dvSpinner !=null )
     { 
      dvSpinner.style.display ='block'
     }
    }
  }

  export function hideSpinner()
  {
    if (typeof window !== 'undefined' && window.document) {   
      const dvSpinner= window.document.getElementById("dvSpinner");
      if(dvSpinner!=null)
      {
       dvSpinner.style.display ='none'
      }
     }
  }
  export function GetData(id: string)
  {
    const textList =[] as string[]; 
    const bidValue = document.getElementsByClassName(id);    
    if(bidValue.length>0)
    {      
      for (let i = 0; i < bidValue.length; i++) { 
        textList.push(String(bidValue[i].innerHTML));
      }      
    }
    return textList;
  } 

  export function alertUserUnAuthentication() 
  {
    alert('Sign in to securely access, manage, and collaborate on your personalized business data.');
  }

  export function checkUserLogin() 
  {
    if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') != null) {   
     return true;
    }
    return false;
  }
  
  export async function getUserDetails() 
  {
    if (typeof window !== 'undefined' && window.localStorage) {   
      return localStorage.getItem('user_firstName');     
     }
     return "User";
  }

  export async function userLogin(email: string, password: string) 
  {
    try
    {
      showSpinner();
      const response = await fetch(domainURL+'Account/login', {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password
          }),
          headers: {
              'Content-type': 'application/json'
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as AuthResponse;
        //console.log(responseData.accessToken);   
        if (typeof window !== 'undefined' && window.localStorage) {   
          localStorage.setItem('auth_token', responseData.accessToken);
          localStorage.setItem('user_firstName', responseData.firstName);
          localStorage.setItem('user_lastName', responseData.lastName);
        }
        hideSpinner();
        return true;
      } 
      else {
        console.log("error-1");   
        hideSpinner();
        return false;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }

  export async function checkIfTokenValid() 
  {
    try
    {      
      const response = await fetch(domainURL+'Account/checkTokenValidity', {
          method: "POST",
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
        }
      });
      if (response.ok) {
          
      } 
      else  if (response.status == 401) {
        if (typeof window !== 'undefined' && window.localStorage) {      
          window.localStorage.clear();
          window.location.href="/signin";
         }         
      }
    }
    catch
    {
      console.log("error");   
     
    }        
  };


  export async function registerUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  try {
    showSpinner();

    const response = await fetch(domainURL + "Account/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // ❌ API failed (like 400, 500, etc.)
      console.error("Registration failed:", response.status);
      hideSpinner();
      return 1;
    }

    const result = await response.json();
    console.log("Register API Response:", result);

    // ✅ Check if API returns user or userId
    const newUser = result.user || result;

    if (newUser && (newUser.userId || newUser.id)) {
      // Store userId in localStorage
      localStorage.setItem("userId", (newUser.userId || newUser.id).toString());
      console.log("User ID saved:", newUser.userId || newUser.id);
    } else {
      console.warn("No userId found in response");
    }

    hideSpinner();
    return 0;
  } catch (err) {
    console.error("Error in registerUser:", err);
    hideSpinner();
    return 2;
  }
}

/* 
  export async function registerUser(email: string, password: string,firstName: string, lastName: string) 
  {
    try
    {
      showSpinner();
      const response = await fetch(domainURL+'Account/register', {
          method: "POST",
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: password
          }),
          headers: {
              'Content-type': 'application/json'
          }
      });
      if (response.ok) { 
          console.log(2222); 
        const result = await response.json();

      // Assuming your API returns user object with `userId`
      const newUser = result.user;

      if (newUser && newUser.userId) {
        localStorage.setItem("userId", newUser.userId.toString());
      }
          hideSpinner();
          return 0;        
    }
      else {
        console.log("error1");   
        hideSpinner();
        return 1;
      }
    }
    catch
    {
      console.log("error-1");   
      hideSpinner();
      return 2;
    }
  } */

  export async function saveBMCCanvas(data: BMC) 
  {
    try
    {
      showSpinner();
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') != null) {   
        
       }
       else
       {
        return 0;
       }
      const response = await fetch(domainURL+'Canvas/AddBMC', {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) {         
        hideSpinner();
        const responseData=await response.json() as number;
        window.location.href='/swotgenerate?frameworkId='+responseData;   
        return true;     
      } 
      else if (response.status == 401) { 
        window.localStorage.clear();
        window.location.href="/signin";
        hideSpinner();
        return 0;
      }
      else     
      {
        console.log("error");   
        hideSpinner();
        return 0;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return 0;
    }
  }

  export async function saveLMCCanvas(data: LMC) 
  {
    try
    {
      showSpinner();
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') != null) {   
        
       }
       else
       {
        return false;
       }
      const response = await fetch(domainURL+'Canvas/AddLMC', {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) {         
        hideSpinner();
        const responseData=await response.json() as number;
        window.location.href='/swotgenerate?frameworkId='+responseData;      
        return true;
      } 
      else if (response.status == 401) { 
        window.localStorage.clear();
        window.location.href="/signin";
        hideSpinner();
        return false;
      }
      else     
      {
        console.log("error");   
        hideSpinner();
        return false;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }
  export function getQueryVariable(variable: string)
  {          
    const query = window.location.search.substring(1);         
    const vars = query.split("&");         
    for (let i=0;i<vars.length;i++) {
      const pair = vars[i].split("=");                      
      if(pair[0] == variable){return pair[1];}
    }
    return('0');
  }

  export async function GetBMC() 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
        return null;
      }

      let frameworkId = '0';
      if (typeof window !== 'undefined') {
        frameworkId = getQueryVariable('frameworkId');
      }

      showSpinner();
      const response = await fetch(domainURL+'Canvas/GetBMC?frameworkId='+frameworkId, {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as BMC;                
        hideSpinner();     
        return responseData;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return null;
    }
  }

  export async function GetLMC() 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
      return null;
    }

    let frameworkId = '0';
    if (typeof window !== 'undefined') {
        frameworkId = getQueryVariable('frameworkId');
    }

    showSpinner();
    const response = await fetch(domainURL+'Canvas/GetLMC?frameworkId='+frameworkId, {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as LMC;   
        hideSpinner();
        return responseData;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return null;
    }
  }

  export async function DeleteCanvas(id:string) 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/DeleteCanvas?frameworkId='+id, {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) {           
        hideSpinner();
        return true;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return false;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }

  export async function GetAllBMC() 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/GetAllBMC', {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as BMC[];    
        hideSpinner();
        return responseData;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return null;
    }
  }

  export async function GetAllLMC() 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
        return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/GetAllLMC', {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as LMC[];
        hideSpinner();
        return responseData;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return null;
    }
  }

  export async function GetAllCanvas() 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/GetAllCanvas', {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as BMC[];    
        //hideSpinner();
        return responseData;
      } 
      else {
        console.log("error");   
        //hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      //hideSpinner();
      return null;
    }
  }

  export async function GetAllEnvAnalysis() 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/GetAllEnvAnalysis', {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as BMC[];    
        //hideSpinner();
        return responseData;
      } 
      else {
        console.log("error");   
        //hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      //hideSpinner();
      return null;
    }
  }

  export async function GetAllSWOT() 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/GetAllSWOT', {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as BMC[];    
        //hideSpinner();
        return responseData;
      } 
      else {
        console.log("error");   
        //hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      //hideSpinner();
      return null;
    }
  }

  export async function GetAIResultForSWOT(frameworkId: string, rg: string) 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/GetAIResultForSWOT?frameworkId='+frameworkId +'&regenerate='+ rg, {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as RootEnvironmentalAnalysis;    
        hideSpinner();
        return responseData;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return null;
    }
  }

  export async function saveEnvData(data: RootEnvironmentalAnalysis, frameworkId: string) 
  {
    try
    {
      showSpinner();
      const response = await fetch(domainURL+'Canvas/SaveEnv?frameworkId='+frameworkId, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
        }
      });
      if (response.ok) {         
        hideSpinner();
        const responseData=await response.json() as number;
        window.location.href='/towsgenerate?analysisId='+responseData;   
        return true;     
      } 
      else if (response.status == 401) { 
        window.localStorage.clear();
        window.location.href="/signin";
        hideSpinner();
        return 0;
      }
      else     
      {
        console.log("error");   
        hideSpinner();
        return 0;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }

  export async function GetAIResultForSOWT(analysisId: string, rg: string) 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/GetSOWT?analysisId='+analysisId +'&regenerate='+ rg, {
          method: "GET",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as SWOTResponse;    
        hideSpinner();
        return responseData;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return null;
    }
  }

  export async function SaveSWOT(data: SWOTResponse, analysisId: string) 
  {
    try
    {
      showSpinner();
      const response = await fetch(domainURL+'Canvas/SaveSWOT?analysisId='+analysisId, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
        }
      });
      if (response.ok) {         
        hideSpinner();
        const responseData=await response.json() as number;
        //window.location.href='/towsgenerate?analysisId='+responseData;   
        console.log(responseData);
        return responseData;     
      } 
      else if (response.status == 401) { 
        window.localStorage.clear();
        window.location.href="/signin";
        hideSpinner();
        return 0;
      }
      else     
      {
        console.log("error");   
        hideSpinner();
        return 0;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return 0;
    }
  }

  export async function GetAIResultForTOWS(swotId: string, rg: string) 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/GetTOWS?swotId='+swotId +'&regenerate='+ rg, {
          method: "GET",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) { 
        const responseData = await response.json() as TWOSResponse;    
        hideSpinner();
        return responseData;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return null;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return null;
    }
  }

  export async function SaveTOWS(data: TWOSResponse, swotId: string) 
  {
    try
    {
      showSpinner();
      const response = await fetch(domainURL+'Canvas/SaveTOWS?swotId='+swotId, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
        }
      });
      if (response.ok) {         
        hideSpinner();
        //const responseData=await response.json() as TWOSResponse;
        //window.location.href='/towsgenerate?analysisId='+responseData;   
        //console.log(responseData);
        return true;     
      } 
      else if (response.status == 401) { 
        window.localStorage.clear();
        window.location.href="/signin";
        hideSpinner();
        return false;
      }
      else     
      {
        console.log("error");   
        hideSpinner();
        return false;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }

  export async function submitContactUS(contactUs: ContactUsInfo) 
  {
    try
    {
      showSpinner();
      // var contactUs ={} as ContactUsInfo;
      // contactUs.name=name;
      // contactUs.email=email;
      // contactUs.message=message;

      const response = await fetch('https://formsubmit.co/mail@pangeacons.com', {
        method: "POST",
        body: JSON.stringify(contactUs),
        headers: {
            'Content-type': 'application/json'
        }
      });
      if (response.ok) {         
        hideSpinner();          
        return true;     
      } 
      else if (response.status == 401) { 
        window.localStorage.clear();
        window.location.href="/signin";
        hideSpinner();
        return false;
      }
      else     
      {
        console.log("error");   
        hideSpinner();
        return false;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }

  export async function DeleteSWOT(id:string) 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/DeleteSWOT?id='+id, {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) {           
        hideSpinner();
        return true;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return false;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }
  export async function DeleteTOWS(id:string) 
  {
    try
    {
      if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') == null) {
         return null;
      }
    
    showSpinner();
    const response = await fetch(domainURL+'Canvas/DeleteTOWS?id='+id, {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem('auth_token')
          }
      });
      if (response.ok) {           
        hideSpinner();
        return true;
      } 
      else {
        console.log("error");   
        hideSpinner();
        return false;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }

  export async function ResetPSWRequest(email:string) 
  {
    try
    {    
    showSpinner();
    const response = await fetch(domainURL+'Account/Forgetpswinit?email='+email, {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          }
      });
      if (response.ok) {           
        hideSpinner();
        window.location.href="/resetpasswordrequestsent";
        return true;
      } 
      else {
        console.log("error");   
        hideSpinner();
        alertConnectionError();
        return false;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }

  export async function ResetPSWDO(email:string, psw:string, token:string) 
  {
    try
    {    
    showSpinner();
    const response = await fetch(domainURL+'Account/Forgetpswdo?email='+email+'&password='+ psw+'&token='+ token, {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          }
      });
      if (response.ok) {           
        hideSpinner();
        window.location.href="/resetpasswordsuccess";
        return true;
      } 
      else {
        console.log("error");   
        hideSpinner();
        alertConnectionError();
        return false;
      }
    }
    catch
    {
      console.log("error");   
      hideSpinner();
      return false;
    }
  }



  //done by babar


  
export async function getUserById() {
  try {
    // ✅ Get userId from localStorage
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("❌ No userId found in localStorage.");
      return null;
    }

    // ✅ Correct API call: matches [Route("get/{id}")]
    const response = await fetch(`${domainURL}Account/get/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      console.error("❌ Failed to fetch user details:", response.statusText);
      return null;
    }

    // ✅ Parse JSON response
    const userData = await response.json();
    console.log("✅ User data:", userData);
    return userData;
  } catch (error) {
    console.error("🔥 Error fetching user:", error);
    return null;
  }
}

export async function updateUserProfile(
  id: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  phoneNumber?: string,
  city?: string,
  country?: string,
  profileImage?: File
) {
  try {
    showSpinner();

    if (typeof window === "undefined" || !window.localStorage) {
      return false;
    }

    const formData = new FormData();
    formData.append("Id", id);
    if (firstName) formData.append("FirstName", firstName);
    if (lastName) formData.append("LastName", lastName);
    if (email) formData.append("Email", email);
    if (phoneNumber) formData.append("PhoneNumber", phoneNumber);
    if (city) formData.append("City", city);
    if (country) formData.append("Country", country);
    if (profileImage) formData.append("ProfileImage", profileImage);

    const response = await fetch(domainURL + "Account/update", {
      method: "PUT",
      body: formData,
      headers: {
        // ✅ Do NOT set Content-Type manually when sending FormData
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    });

    hideSpinner();

    if (response.ok) {
      const result = await response.json();
      return result;
    } else if (response.status === 401) {
      window.localStorage.clear();
      window.location.href = "/signin";
      return null;
    } else {
      console.error("Update failed", response.status);
      return null;
    }
  } catch (err) {
    console.error("Error updating profile:", err);
    hideSpinner();
    return null;
  }
}
// ✅ Get About by userId
export async function getAbout(userId?: string) {
  try {
    // Only try to get from localStorage if we're on the client side
    if (!userId && typeof window !== "undefined") {
      userId = localStorage.getItem("userId") || undefined;
    }
    if (!userId) return null;

    const token = localStorage.getItem("token"); // Get auth token if needed
    
    const response = await fetch(`${domainURL}Account/getabout/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "", // Add auth header if needed
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch about:", response.status, response.statusText);
      return null;
    }
    
    const data = await response.json();
    
    // Handle different capitalization patterns in API response
    return {
      ID: data.id || data.ID || 0,
      ABout: data.aBout || data.ABout || "",
      UserID: data.userID || data.UserID || userId
    };
  } catch (error) {
    console.error("Error fetching About:", error);
    return null;
  }
}

// ✅ Update About by userId & text
export async function updateAbout(userId: string, aboutText: string) {
  try {
    const response = await fetch(`${domainURL}Account/updateabout`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        UserID: userId,
        ABout: aboutText
      }),
    });

    if (!response.ok) return null;
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error updating About:", error);
    return null;
  }
}

// ✅ Create About by userId & text
export async function createAbout(userId: string, aboutText: string) {
  try {
    const response = await fetch(`${domainURL}Account/createabout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        UserID: userId,
        ABout: aboutText
      }),
    });

    if (!response.ok) return null;
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error creating About:", error);
    return null;
  }
}export async function getCompany(userId: string) {
  try {
    if (!userId) return null;

    const token = localStorage.getItem("token");
    const response = await fetch(`${domainURL}Account/getcompany/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
      },
    });

    if (!response.ok) return null;
    const data = await response.json();
    
    // Handle array response - get the first company or return empty
    if (Array.isArray(data) && data.length > 0) {
      const companyData = data[0];
      return {
        Id: companyData.id || companyData.Id || 0,
        Company: companyData.company || companyData.Company || "",
        Userid: companyData.userid || companyData.userId || companyData.Userid || userId,
      };
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching company:", error);
    return null;
  }
}

// ✅ Create company by userId & company name
export async function createCompany(userId: string, companyName: string) {
  try {
    const response = await fetch(`${domainURL}Account/createcompany`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Userid: userId,
        Company: companyName
      }),
    });

    if (!response.ok) return null;
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error creating company:", error);
    return null;
  }
}
// ✅ Update company by userId & new company name
export async function updateCompany(userId: string, companyName: string) {
  try {
    const response = await fetch(`${domainURL}Account/updatecompany`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Userid: userId,
        Company: companyName
      }),
    });

    if (!response.ok) return null;
    const json = await response.json();
    return json.data; // returns updated company info
  } catch (error) {
    console.error("Error updating company:", error);
    return null;
  }
}
