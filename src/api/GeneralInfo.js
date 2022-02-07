export const billingInputFeilds=[
{
    id: 1,
    name: "name",
    type: "text",
    placeholder: "your full name...",
    errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
    label: "Name",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
},
{
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Please enter valid email address!",
    label: "E-mail",
    required: true,
},
{
    id: 3,
    name: "mobile",
    type: "number",
    placeholder: "your contact number...i.e.+91000000000",
    errorMessage:
        "Please enter valid Mobile Number address!",
    label: "Mobile",
    pattern: "^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$",
    required: true,
}]

// card 

export const cardInputFeilds=[
{
    id: 1,
    name: "name-on-card",
    type: "text",
    placeholder: "card number...",
    label: "Name on Card"
},
{
    id: 2,
    name: "card-number",
    type: "number",
    placeholder: "credit / debit card number",
    errorMessage:
        "please enter valid card number",
    label: "Card Number",
    pattern: "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$",
    required: true,
}]