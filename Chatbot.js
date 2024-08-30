import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import './Chatbot.css';
import JobLink from './JobLink';

const steps = [
  {
    id: '1',
    message: 'Greetings and welcome to Enormous IT! We are excited to assist you. Could you kindly share your name with us so we can begin?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hello {previousValue}, it is a pleasure to meet you!',
    trigger: '4',
  },
  {
    id: '4',
    message: 'How can I help you?',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'Regarding the services', trigger: '6' },
      { value: 2, label: 'Regarding the job', trigger: '7' },
    ],
  },
  {
    id: '6',
    message: 'Please select the relevant Domain',
    trigger: '8',
  },
  {
    id: '8',
    options: [
      { value: 3, label: 'General Staffing', trigger: '12' },
      { value: 4, label: 'Payroll', trigger: '12' },
      { value: 5, label: 'Healthcare', trigger: '12' },
      { value: 6, label: 'Pharma', trigger: '12' },
      { value: 7, label: 'Finance', trigger: '12' },
      { value: 8, label: 'Manufacturing', trigger: '12' },
      { value: 9, label: 'NBFC', trigger: '12' },
      { value: 10, label: 'Insurance', trigger: '12' },
      { value: 11, label: 'Retail', trigger: '12' },
      { value: 12, label: 'Logistics', trigger: '12' },
      { value: 13, label: 'Food & Packaging', trigger: '12' },
      { value: 14, label: 'Telecommunications', trigger: '12' },
      { value: 15, label: 'Real Estate', trigger: '12' },
      { value: 16, label: 'Media & Entertainment', trigger: '12' },
      { value: 17, label: 'Biotech', trigger: '12' },
      { value: 18, label: 'Public Sector', trigger: '12' },
    ],
  },
  {
    id: '12',
    message: 'Thank you for showing your interest with us. You can reach out to us at info@enormousit.com or mktg@enormousit.com, or call us on +91-40-48553545.',
  },
  {
    id: '7',
    component: <JobLink />,
    end: true,
  },
];

const theme = {
  background: '#f6fff8',
  headerBgColor: '#004b23',
  headerFontSize: '20px',
  botBubbleColor: '#4f706f',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#a4c3b2 ',
  userFontColor: 'black',
};

const config = {
  botAvatar: "chatbot-ecorp.png",
  floating: true,
};

// Styled component to apply custom styles
const StyledChatBot = styled(ChatBot)`
  .rsc-ts-bubble-text {
    font-size: 16px; /* Increase the font size */
    font-weight: 600; /* Increase the font weight */
  }

  .rsc-ts-bubble {
    font-size: 16px;
    font-weight: 500;
  }

  .rsc-os-option-element {
    font-size: 16px;
    font-weight: 500;
  }
`;

function App() {
  return (
    <div className='chat'>
      <ThemeProvider theme={theme}>
        <StyledChatBot
          headerTitle="Live Chat"
          steps={steps}
          {...config}
          className="chatbot"
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
