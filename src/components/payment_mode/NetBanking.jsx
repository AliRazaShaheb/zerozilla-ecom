import React,{useState} from 'react';
import Select from 'react-select';


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'white' : '#954b28',
    backgroundColor: state.isSelected ? '#954b28' : 'rgba(255,255,255,0.5)',
    
  }),
  control: (provided,state) => ({
    ...provided,
    color: '#954b28',
    backgroundColor: 'rgba(255,255,255,0.5)', 
    boxShadow:"none",
    border:"none",
    cursor:"pointer",
  }),
  container: (provided) => ({
    ...provided,
    boxShadow:"none", 
  }),

  input: (provided) => ({
    ...provided,
    color: '#954b28', 
    outline:"none"
    
  }),

 
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#954b28',
    
  }),
  
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { 
      ...provided, 
      color: '#954b28',
      opacity, transition };
  }
}


const NetBanking = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  return <div className='name'>
      <label for="bank-list">Choose your Bank</label>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        styles={customStyles}
        options={bankList}
        maxMenuHeight={150}
        placeholder="Select Bank"
      />
        
  </div>;
};

export default NetBanking;

const bankList = [
{value:"Bank of Baroda",label:"Bank of Baroda"},
{value:"Bank of India",label:"Bank of India"},
{value:"Bank of Maharashtra",label:"Bank of Maharashtra"},
{value:"Canara Bank",label:"Canara Bank"},
{value:"Central Bank of India",label:"Central Bank of India"},
{value:"Indian Bank",label:"Indian Bank"},
{value:"Indian Overseas Bank",label:"Indian Overseas Bank"},
{value:"Punjab & Sind Bank",label:"Punjab & Sind Bank"},
{value:"Punjab National Bank",label:"Punjab National Bank"},
{value:"State Bank of India",label:"State Bank of India"},
{value:"UCO Bank",label:"UCO Bank"},
{value:"Union Bank of India",label:"Union Bank of India"},
{value:"Axis Bank Ltd.",label:"Axis Bank Ltd."},
{value:"Bandhan Bank Ltd.",label:"Bandhan Bank Ltd."},
{value:"CSB Bank Ltd.",label:"CSB Bank Ltd."},
{value:"City Union Bank Ltd.",label:"City Union Bank Ltd."},
{value:"DCB Bank Ltd.",label:"DCB Bank Ltd."},
{value:"Dhanlaxmi Bank Ltd.",label:"Dhanlaxmi Bank Ltd."},
{value:"Federal Bank Ltd.",label:"Federal Bank Ltd."},
{value:"HDFC Bank Ltd",label:"HDFC Bank Ltd"},
{value:"ICICI Bank Ltd.",label:"ICICI Bank Ltd."},
{value:"Induslnd Bank Ltd",label:"Induslnd Bank Ltd"},
{value:"IDFC First Bank Ltd.",label:"IDFC First Bank Ltd."},
{value:"Jammu & Kashmir Bank Ltd.",label:"Jammu & Kashmir Bank Ltd."},
{value:"Karnataka Bank Ltd.",label:"Karnataka Bank Ltd."},
{value:"Karur Vysya Bank Ltd.",label:"Karur Vysya Bank Ltd."},
{value:"Kotak Mahindra Bank Ltd",label:"Kotak Mahindra Bank Ltd"},
{value:"Lakshmi Vilas Bank Ltd.",label:"Lakshmi Vilas Bank Ltd."},
{value:"Nainital Bank Ltd.",label:"Nainital Bank Ltd."},
{value:"RBL Bank Ltd.",label:"RBL Bank Ltd."},
{value:"South Indian Bank Ltd.",label:"South Indian Bank Ltd."},
{value:"Tamilnad Mercantile Bank Ltd.",label:"Tamilnad Mercantile Bank Ltd."},
{value:"YES Bank Ltd.",label:"YES Bank Ltd."},
{value:"IDBI Bank Ltd.",label:"IDBI Bank Ltd."},
{value:"Au Small Finance Bank Limited",label:"Au Small Finance Bank Limited"},
{value:"Capital Small Finance Bank Limited",label:"Capital Small Finance Bank Limited"},
{value:"Equitas Small Finance Bank Limited",label:"Equitas Small Finance Bank Limited"},
{value:"Suryoday Small Finance Bank Limited",label:"Suryoday Small Finance Bank Limited"},
{value:"Ujjivan Small Finance Bank Limited",label:"Ujjivan Small Finance Bank Limited"},
{value:"Utkarsh Small Finance Bank Limited",label:"Utkarsh Small Finance Bank Limited"},
{value:"ESAF Small Finance Bank Limited",label:"ESAF Small Finance Bank Limited"},
{value:"Fincare Small Finance Bank Limited",label:"Fincare Small Finance Bank Limited"},
{value:"Jana Small Finance Bank Limited",label:"Jana Small Finance Bank Limited"},
{value:"North East Small Finance Bank Limited",label:"North East Small Finance Bank Limited"},
{value:"Shivalik Small Finance Bank Limited",label:"Shivalik Small Finance Bank Limited"},
{value:"India Post Payments Bank Limited",label:"India Post Payments Bank Limited"},
{value:"Fino Payments Bank Limited",label:"Fino Payments Bank Limited"},
{value:"Paytm Payments Bank Limited",label:"Paytm Payments Bank Limited"},
{value:"Airtel Payments Bank Limited",label:"Airtel Payments Bank Limited"},
{value:"Andhra Pragathi Grameena Bank",label:"Andhra Pragathi Grameena Bank"},
{value:"Andhra Pradesh Grameena Vikas Bank",label:"Andhra Pradesh Grameena Vikas Bank"},
{value:"Arunachal Pradesh Rural Bank",label:"Arunachal Pradesh Rural Bank"},
{value:"Aryavart Bank",label:"Aryavart Bank"},
{value:"Assam Gramin Vikash Bank",label:"Assam Gramin Vikash Bank"},
{value:"Bangiya Gramin Vikas Bank",label:"Bangiya Gramin Vikas Bank"},
{value:"Baroda Gujarat Gramin Bank",label:"Baroda Gujarat Gramin Bank"},
{value:"Baroda Rajasthan Kshetriya Gramin Bank",label:"Baroda Rajasthan Kshetriya Gramin Bank"},
{value:"Baroda UP Bank",label:"Baroda UP Bank"},
{value:"Chaitanya Godavari Grameena Bank",label:"Chaitanya Godavari Grameena Bank"},
{value:"Chhattisgarh Rajya Gramin Bank",label:"Chhattisgarh Rajya Gramin Bank"},
{value:"Dakshin Bihar Gramin Bank",label:"Dakshin Bihar Gramin Bank"},
{value:"Ellaquai Dehati Bank",label:"Ellaquai Dehati Bank"},
{value:"Himachal Pradesh Gramin Bank",label:"Himachal Pradesh Gramin Bank"},
{value:"J&K Grameen Bank",label:"J&K Grameen Bank"},
{value:"Jharkhand Rajya Gramin Bank",label:"Jharkhand Rajya Gramin Bank"},
{value:"Karnataka Gramin Bank",label:"Karnataka Gramin Bank"},
{value:"Karnataka Vikas Grameena Bank",label:"Karnataka Vikas Grameena Bank"},
{value:"Kerala Gramin Bank",label:"Kerala Gramin Bank"},
{value:"Madhya Pradesh Gramin Bank",label:"Madhya Pradesh Gramin Bank"},
{value:"Madhyanchal Gramin Bank",label:"Madhyanchal Gramin Bank"},
{value:"Maharashtra Gramin Bank",label:"Maharashtra Gramin Bank"},
{value:"Manipur Rural Bank",label:"Manipur Rural Bank"},
{value:"Meghalaya Rural Bank",label:"Meghalaya Rural Bank"},
{value:"Mizoram Rural Bank",label:"Mizoram Rural Bank"},
{value:"Nagaland Rural Bank",label:"Nagaland Rural Bank"},
{value:"Odisha Gramya Bank",label:"Odisha Gramya Bank"},
{value:"Paschim Banga Gramin Bank",label:"Paschim Banga Gramin Bank"},
{value:"Prathama UP Gramin Bank",label:"Prathama UP Gramin Bank"},
{value:"Puduvai Bharathiar Grama Bank",label:"Puduvai Bharathiar Grama Bank"},
{value:"Punjab Gramin Bank",label:"Punjab Gramin Bank"},
{value:"Rajasthan Marudhara Gramin Bank",label:"Rajasthan Marudhara Gramin Bank"},
{value:"Saptagiri Grameena Bank",label:"Saptagiri Grameena Bank"},
{value:"Sarva Haryana Gramin Bank",label:"Sarva Haryana Gramin Bank"},
{value:"Saurashtra Gramin Bank",label:"Saurashtra Gramin Bank"},
{value:"Tamil Nadu Grama Bank",label:"Tamil Nadu Grama Bank"},
{value:"Telangana Grameena Bank",label:"Telangana Grameena Bank"},
{value:"Tripura Gramin Bank",label:"Tripura Gramin Bank"},
{value:"Utkal Grameen bank",label:"Utkal Grameen bank"},
{value:"Uttar Bihar Gramin Bank",label:"Uttar Bihar Gramin Bank"},
{value:"Uttarakhand Gramin Bank",label:"Uttarakhand Gramin Bank"},
{value:"Uttarbanga Kshetriya Gramin Bank",label:"Uttarbanga Kshetriya Gramin Bank"},
{value:"Vidharbha Konkan Gramin Bank",label:"Vidharbha Konkan Gramin Bank"},
{value:"Australia and New Zealand Banking Group Ltd.",label:"Australia and New Zealand Banking Group Ltd."},
{value:"Westpac Banking Corporation",label:"Westpac Banking Corporation"},
{value:"Bank of Bahrain & Kuwait BSC",label:"Bank of Bahrain & Kuwait BSC"},
{value:"AB Bank Ltd.",label:"AB Bank Ltd."},
{value:"Sonali Bank Ltd.",label:"Sonali Bank Ltd."},
{value:"Bank of Nova Scotia",label:"Bank of Nova Scotia"},
{value:"Industrial & Commercial Bank of China Ltd.",label:"Industrial & Commercial Bank of China Ltd."},
{value:"BNP Paribas",label:"BNP Paribas"},
{value:"Credit Agricole Corporate & Investment Bank",label:"Credit Agricole Corporate & Investment Bank"},
{value:"Societe Generale",label:"Societe Generale"},
{value:"Deutsche Bank",label:"Deutsche Bank"},
{value:"HSBC Ltd",label:"HSBC Ltd"},
{value:"PT Bank Maybank Indonesia TBK",label:"PT Bank Maybank Indonesia TBK"},
{value:"Mizuho Bank Ltd.",label:"Mizuho Bank Ltd."},
{value:"Sumitomo Mitsui Banking Corporation",label:"Sumitomo Mitsui Banking Corporation"},
{value:"MUFG Bank, Ltd.",label:"MUFG Bank, Ltd."},
{value:"Cooperatieve Rabobank U.A.",label:"Cooperatieve Rabobank U.A."},
{value:"Doha Bank",label:"Doha Bank"},
{value:"Qatar National Bank",label:"Qatar National Bank"},
{value:"JSC VTB Bank",label:"JSC VTB Bank"},
{value:"Sberbank",label:"Sberbank"},
{value:"United Overseas Bank Ltd",label:"United Overseas Bank Ltd"},
{value:"FirstRand Bank Ltd",label:"FirstRand Bank Ltd"},
{value:"Shinhan Bank",label:"Shinhan Bank"},
{value:"Woori Bank",label:"Woori Bank"},
{value:"KEB Hana Bank",label:"KEB Hana Bank"},
{value:"Industrial Bank of Korea",label:"Industrial Bank of Korea"},
{value:"Kookmin Bank",label:"Kookmin Bank"},
{value:"Bank of Ceylon",label:"Bank of Ceylon"},
{value:"Credit Suisse A.G",label:"Credit Suisse A.G"},
{value:"CTBC Bank Co., Ltd.",label:"CTBC Bank Co., Ltd."},
{value:"Krung Thai Bank Public Co. Ltd.",label:"Krung Thai Bank Public Co. Ltd."},
{value:"Abu Dhabi Commercial Bank Ltd.",label:"Abu Dhabi Commercial Bank Ltd."},
{value:"Mashreq Bank PSC",label:"Mashreq Bank PSC"},
{value:"First Abu Dhabi Bank PJSC",label:"First Abu Dhabi Bank PJSC"},
{value:"Emirates Bank NBD",label:"Emirates Bank NBD"},
{value:"Barclays Bank Plc.",label:"Barclays Bank Plc."},
{value:"Standard Chartered Bank",label:"Standard Chartered Bank"},
{value:"NatWest Markets Plc",label:"NatWest Markets Plc"},
{value:"American Express Banking Corporation",label:"American Express Banking Corporation"},
{value:"Bank of America",label:"Bank of America"},
{value:"Citibank N.A.",label:"Citibank N.A."},
{value:"J.P. Morgan Chase Bank N.A.",label:"J.P. Morgan Chase Bank N.A."},
{value:"SBM Bank (India) Limited*",label:"SBM Bank (India) Limited*"},
{value:"DBS Bank India Limited*",label:"DBS Bank India Limited*"},
{value:"Bank of China Ltd.",label:"Bank of China Ltd."}

]