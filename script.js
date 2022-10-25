const arr = [
    {name: '3rd party Authorization', // 0
     message: `
     <div>Invalid if:
        <ul>
            <li>Name of the person being authorized is incomplete or unreadable.</li>
            <li>Customer's relation to person is missing.</li>
            <li>Missing owner's signature.</li>
            <li>Email - the email address used doesn't match in the system.</li>
        </ul>
     </div>

     <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>
            <li>Don't forget to write the authorization in comments.</li>
            <li>Add a 'check' to the Alert box.</li>
            <li>Upload the document to filenet if the setup is successful.</li>
        </ul>
     </div>
     `
    },{
    name: 'ACH Documents, Bi-weekly and Monthly', // 1
    message: 
    `
    <div>Invalid if:
        <ul>
            <li>ACH is not signed.</li>
            <li>Invalid routing/ account number.</li>
            <li>No name written in form.</li>
            <li>Form received is a DDE (Direct deposit enrollment).</li>
            <li>Account has FPC/FPD condition.</li>
            <li>Account is in BK (Bankruptcy) condition.</li>
        </ul>
    </div>
    
    <div>Process reminders:
         <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>               
            <li>Ask questions if unsure. ACH has a sensitive process.</li>
            <li>Always upload the ACH form if the setup is successful.</li>
        </ul>
    </div>
    `
    },{
    name: 'Better Business Bureau - Documents', // 2
    message: 
    `
    <div>Invalid if:
        <ul>
            <li>Document is unreadable or not legible.</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Forward the document to Compliance dept.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>
    </div>
    `
    },{
    name: 'Bankruptcy Related Documents', // 3
    message: 
    `
    <div>Invalid if:
        <ul>
            <li>Document is unreadable or not legible.</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XBK.</li>
            <li>Forward the document to Bankruptcy_Specialists.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>
    </div>
    `
    },{
    name: 'Cease and Desist', // 4
    message: 
    `
    <div>Invalid if:
        <ul>
            <li>The document is cut, torn off or unreadable.</li>
            <li>If fax - the document has no signature.</li>
            <li>If email - the email address used doesn't match in the system.</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>
            <li>Make sure to apply 'DNC' to all 'good' numbers in Angular.</li>
            <li>If requesting to cease all communication, add ACC-SCL.</li>
            <li>For Cease & Desist removal, apply ACC-RCED and ensure to uncheck DNC box in Angular.</li>
            <li>Upload the document to filenet after successful setup.</li>
        </ul>
    </div>
    `
    },{
    name: 'Cheques', // 5
    message: 
    `
    <div>That includes:
        <ul>
            <li>Cheque for Account payoff.</li>
            <li>Checks sent by Insurance institutions.</li>
            <li>Returned checks</li>
            <li>Dealer checks</li>
        </ul>
    </div>  
    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>
            <li>Properly rename the document and save to your folder.</li>
            <li>All INS Claims/Loss related checks will be forwarded to WFS Insuranceclaims.</li>
            <li>If the check is UTL, contact your immediate supervisor.</li>
            <li>Do not upload the document, unless requested by a supervisor or higher.</li>
        </ul>
    </div>
    `
    },{
    name: 'COA (Change of Address)', // 6
    message: 
    `
    <div>Invalid if:
        <ul>
            <li>The letter is cut, torn off or unreadable.</li> 
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>             
            <li>Update the address, if necessary.</li>
            <li>Always check the provided address if a postal address or a physical one. Match the address in Angular accordingly.</li>
            <li>Add the written number to Angular, if it's a new number. Leave it in 'potential' status.</li>
            <li>Upload the document to filenet if the setup is successful.</li>
            
        </ul>
    </div>
    `
    },{
    name: 'Credit inquiry', // 7
    message: 
    `
    <div>Invalid if:
        <ul>
            <li>Letter is unreadable or not legible.</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Forward the document to CSR Request.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>
    </div>
    `
    },{
    name: 'Dealer complaints or Car issues', // 8
    message: 
    `
    <div>That includes:
        <ul>
            <li>Diagnostic report</li>
            <li>Repair estimate</li>
            <li>Vehicle history</li>
            <li>Car complaints</li>
            <li>Dealer complaints</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>
            <li>If there's no DCR condition present, add the DCR-DCR condition.(no need to forward)</li>
            <li>If DCR-DCR condition is already applied, forward the document to Dealer Compliance.</li>
            <li>Upload the document to filenet after ACC-Condition/forward.</li>
        </ul>
    </div>

    `
    },{
    name: 'Death Certificate', // 9
    message: 
    `
    <div>Invalid if:
        <ul>
            <li>Unclear / Unreadable copy.</li>
            <li>If the document doesn't have dry stamp or coroner/examiner name & signature.</li>
            <li>If the customer name doesn't match in the system.</li>

        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>
            <li>Always add ACC-DCP for Primary, -DCS for secondary.</li>
            <li>Remember to put DNC to all numbers associated to the deceased customer in Angular.</li>
            <li>Always add comment for family members to settle the balance in 30 days or the car may be repo'ed.</li>
            <li>Upload the document to filenet after successful documentation.</li>
        </ul>
    </div>
    `
    },{
    name: 'Escalations or Escalated Concerns', // 10
    message: 
    `
    <div>That Includes:   
        <ul>
            <li>FPC/FPD related concerns</li>
            <li>Re-assignment of Contract</li>
            <li>Settlement requests</li>
            <li>Voluntary Surrender</li>
        </ul>
    </div>    

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Forward the document/ email to Supervisors_All.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>
    </div>    
    `
    },{
    name: 'Extension Agreement', // 11
    message:
    `
    <div>Invalid if:
        <ul>
            <li>The letter is cut, torn off or unreadable.</li> 
            <li>The letter has no signature.</li>
            <li>The letter has expired.</li>
            <li>Both primary and cosigner must have a signature. Missing one is invalid.</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR SEA.</li>             
            <li>Upload the document to filenet after successful setup.</li>
        </ul>
    </div>
    `
    },{
    name: 'Garnishment Documents', //12
    message:
    `
    <div>Invalid if:
        <ul>
            <li>Letter is unreadable or not legible.</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Forward the document to Consumer_Litigation_Specialists.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>
    </div>
    `
    },{
    name: 'Goodwill for credit revision',  //13
    message:
    `
    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>             
            <li>Upload the document to filenet.</li>       
        </ul>
    </div>
    `
    },{
    name: "IDs | Driver's License, Passports etc.", //14
    message:
    `
    <div>That includes:
        <ul>
            <li>Driver's License</li>
            <li>Passport</li>
            <li>Any other IDs</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI/ XOT.</li>
            <li>Read comments and know the purpose of customer sending an ID.</li>
        </ul>
    </div>
    `
    },{
    name: 'Impound-Related requests', //15
    message:
    `
    <div>Invalid if:
        <ul>
            <li>Letter is unreadable or not legible.</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Forward the document to impound.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>
    </div>
    `
    },{
    name: 'Insurance-Related concerns', // 16
    message:
    `
    <div>That includes:
        <ul>
            <li>Insurance ID</li>
            <li>Insurance/Policy renewal</li>
            <li>Insurance notification</li>
            <li>Policy Expiration</li>
            <li>Letter of Guarantee</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Forward all insurance documents to insurancedocuments.</li>
            <li>Forward all Claims / Loss / Letter of Guarantee to WFS Insuranceclaims.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>
    </div>
    `
    },{
    name: 'Legal-related concerns, Court orders, ID Theft, Police report', // 17
    message:
    `
    <div>Invalid if:
        <ul>
            <li>The letter is cut, torn off or unreadable.</li> 
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Forward the document to Westlake_Legal Department.</li>
            <li>Redact SSN before uploading the document to filenet.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>  
    </div>
    `
    },{
    name: 'Name correction requests', //18
    message:
    `
    <div>Invalid if:
        <ul>
            <li>ID provided is not clear</li>
            <li>First/Last name change - must have an ID and a supporting document. Missing one is invalid.</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>
            <li>Support Admins - process only for misspelling and missing suffix(ie: jr.),  max. of 3 letters.</li>
            <li>For complex change such as first name, last change, visit <span class="highlight">"Servicing Admin-Related"<span>.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>
    </div>
    `
    },{
    name: "Payment-Related Concerns",  // 19
    message: 
    `
    <div>That includes:
        <ul>
            <li>Payment receipt</li>                  
            <li>Bank statement</li>
            <li>Transaction History</li>      
            <li>Screenshot for proof of payment</li>
            <li>Any document related to Missing payments, Overdraft, Refund, NSF, waive fees issues</li>
        
        </ul>
    </div>
    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>
            <li>Scan the comments and look for an ongoing issue that required them to send a file.</li>
            <li>If there's no ongoing issue, Upload the docs to filenet. End process.</li>
            <li>Overdraft, Refund, NSF, waive fees issues - Upload the docs to filenet. End process.</li>
            <li>Missing payments & Payment research - Forward the docs to Servicing Admins.</li>
            <li>Unauthorized payments/ charge - Please escalate to a supervisor.</li>
        </ul>
    </div>
    `
    },{
    name: "Privacy Opt-out", // 20
    message: 
    `
    <div>Invalid if
        <ul>
            <li>Missing a signature.</li>           
        </ul>
    </div>
    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>             
            <li>Upload the document to filenet after successful process.</li>      
        </ul>
    </div>
    `
    },{
    name: "Reinstatement Docs, Authorizing a 3rd party to pick-up the Vehicle", // 21
    message: 
    `
    <div>That includes:
        <ul>
            <li>3rd party authorization to pick up car</li>
            <li>3rd party authorization to pick up items/ belongings inside the car</li>
            <li>CHP Release forms</li>
            <li>3 Character references</li>
            <li>Proof of Employment</li>
            <li>Pay slip</li>
            <li>Proof of Billing</li>
            <li>Stips</li>
        </ul>
    </div>
    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Forward the document to Reinstatement Admins.</li>
            <li>Uploading the document to filenet is not necessary.</li>
        </ul>
    </div>
    `
    },{
    name: "Military Orders related to SCRA benefit", // 22
    message: 
    `
    <div>Invalid if:
        <ul>
            <li>Letter is unreadable or not legible.</li>
        </ul>
    </div>
    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>If the document is "Request and Authorization for Permanent change of Station", visit <span class="highlight">"Servicing Admin-Related"<span>. </li>
            <li>Ensure the document is for SCRA benefit.</li>
            <li>Forward the document to Westlake_CEC_Dept.</li>
            <li>Upload the document to filenet afer successful forward.</li>   
        </ul>
    </div> 
    `
    },{
    name: "Servicing Related Requests", // 23
    message: 
    `
    <div>That Includes:
        <ul>
            <li>Authorization to ship vehicle</li>
            <li>Credit Dispute/ FCRA reporting</li>
            <li>Copy of contract request</li>
            <li>Debt Validation</li>
            <li>DOB Correction</li>
            <li>Paid in Full letter request</li>
            <li>Payoff Requests</li>
            <li>Power of Attorney (POA)</li>
            <li>RTC letter</li>
            <li>W9 Request</li>
        </ul>
    </div>

    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Forward the document to Servicing Admins.</li>
            <li>Upload the letter/document to filenet afer successful forward.</li>
            <li>Upload the IDs only if requested by a supervisor.</li>

        </ul>
    </div>
    `
    },{
    name: "SSN Modification Requests",  // 24
    message: 
    `
    <div>Invalid if
        <ul>
            <li>No SSN ID provided</li>     
            <li>Document is too small, unreadable or not legible.</li>      
        </ul>
    </div>
    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR OBI.</li>  
            <li> 1 digit correction - Process as normal.</li>
            <li>2 or more digit correction - Forward the document to Servicing Admins c/o Jennie Carillo.</li>      
        </ul>
    </div>
    `
    },{
    name: "Title-Related concerns", // 25
    message: 
    `
    <div>That Includes:     
        <ul>
            <li>Lien Release (Non-insurance related)</li>
            <li>Title request</li>
            <li>Title request for State change</li>
            <li>Tags / Plates / Car registration concerns</li>
            
        </ul>
    </div>  
    <div>Process reminders:
        <ul>
            <li>Always acknowledge the fax/email - IEM/IFR XOT.</li>
            <li>Refer to the chart flow below. It covers most of the topics regarding Title.</li>
            <li>Upload the document to filenet afer successful forward.</li>
        </ul>
    </div>  
    <div class="flowchart">
        <img src="./Title-flowchart.jpg" alt="Title Flowchart">
    </div>
    `
    },{
    name: "Blank documents, Returned Mail, UTL email/fax", // 26
    message: 
    `
    <div>That includes:
        <ul>
            <li>Blank paper</li>
            <li>Detached pages with no identifiers (no acct# or phone#)</li>
            <li>Document cover</li>
            <li>Envelope only</li>
            <li>Returned mail</li>
            <li>Notice of intent (NOI)</li>
            <li>Serious Default letter</li>
            <li>Torn paper</li>                                       
            <li>Receipts with no identifiers</li>
            <li>Welcome letter</li>
            <li>Emails with no identifiers and has no attachments</li>
            <li>Emails with incorrect acct #, email address that has no match</li>
        </ul>
    </div>
    <div>Process reminders:
        <ul>
            <li>Always check for customer notes, handwritten instructions.</li>
            <li>Returned mail, NOI, Default letter - properly rename and save to folder. No need to upload.</li>
            <li>UTL tip - If the document has VIN, search it through OFSLL. Ask help when needed.</li>              
            <li>True UTL Fax - properly rename the doc to UTL - (type of document) and date today.</li>
            <li>True UTL mail - Always place a UTL category to the email.</li>
        </ul>
    </div>
    `
    } 
]
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    })
})
function topicPresenter(name) {
    const mainTitle = document.querySelector('.title');
    const mainBody = document.querySelector('.content');
    switch (name) {
        case 'name0':
            mainTitle.innerHTML = arr[0].name
            mainBody.innerHTML = arr[0].message
            break
        case 'name1':
            mainTitle.innerHTML = arr[1].name
            mainBody.innerHTML = arr[1].message
            break
        case 'name2':
            mainTitle.innerHTML = arr[2].name
            mainBody.innerHTML = arr[2].message
            break
        case 'name3':
            mainTitle.innerHTML = arr[3].name
            mainBody.innerHTML = arr[3].message
            break
        case 'name4':
            mainTitle.innerHTML = arr[4].name
            mainBody.innerHTML = arr[4].message
            break
        case 'name5':
            mainTitle.innerHTML = arr[5].name
            mainBody.innerHTML = arr[5].message
            break
        case 'name6':
            mainTitle.innerHTML = arr[6].name
            mainBody.innerHTML = arr[6].message
            break
        case 'name7':
            mainTitle.innerHTML = arr[7].name
            mainBody.innerHTML = arr[7].message
            break
        case 'name8':
            mainTitle.innerHTML = arr[8].name
            mainBody.innerHTML = arr[8].message
            break
        case 'name9':
            mainTitle.innerHTML = arr[9].name
            mainBody.innerHTML = arr[9].message
            break
        case 'name10':
            mainTitle.innerHTML = arr[10].name
            mainBody.innerHTML = arr[10].message
            break
        case 'name11':
            mainTitle.innerHTML = arr[11].name
            mainBody.innerHTML = arr[11].message
            break
        case 'name12':
            mainTitle.innerHTML = arr[12].name
            mainBody.innerHTML = arr[12].message
            break
        case 'name13':
            mainTitle.innerHTML = arr[13].name
            mainBody.innerHTML = arr[13].message
            break
        case 'name14':
            mainTitle.innerHTML = arr[14].name
            mainBody.innerHTML = arr[14].message
            break
        case 'name15':
            mainTitle.innerHTML = arr[15].name
            mainBody.innerHTML = arr[15].message
            break
        case 'name16':
            mainTitle.innerHTML = arr[16].name
            mainBody.innerHTML = arr[16].message
            break
        case 'name17':
            mainTitle.innerHTML = arr[17].name
            mainBody.innerHTML = arr[17].message
            break
        case 'name18':
            mainTitle.innerHTML = arr[18].name
            mainBody.innerHTML = arr[18].message
            break
        case 'name19':
            mainTitle.innerHTML = arr[19].name
            mainBody.innerHTML = arr[19].message
            break
        case 'name20':
            mainTitle.innerHTML = arr[20].name
            mainBody.innerHTML = arr[20].message
            break
        case 'name21':
             mainTitle.innerHTML = arr[21].name
             mainBody.innerHTML = arr[21].message
             break
        case 'name22':
            mainTitle.innerHTML = arr[22].name
            mainBody.innerHTML = arr[22].message
            break
        case 'name23':
            mainTitle.innerHTML = arr[23].name
            mainBody.innerHTML = arr[23].message
            break
        case 'name24':
            mainTitle.innerHTML = arr[24].name
            mainBody.innerHTML = arr[24].message
            break
        case 'name25':
            mainTitle.innerHTML = arr[25].name
            mainBody.innerHTML = arr[25].message
            break
        case 'name26':
            mainTitle.innerHTML = arr[26].name
            mainBody.innerHTML = arr[26].message
            break
        default: 
            mainTitle.innerHTML = "That's an error."
            mainBody.innerHTML = "Please reload the page."   
    }
}

/*
Developed by Kenn Galgao, 2022
HTML
CSS
Vanilla Javascript
*/

console.log(`

Developed by Kenn Galgao, 2022
HTML
CSS
Vanilla Javascript
`);