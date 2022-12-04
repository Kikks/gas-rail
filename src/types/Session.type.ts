type Session = {
  id: number;
  contact_id: string;
  session_id: string;
  direction: string;
  call_session_state: string;
  destination_number: string;
  duration_in_seconds: string;
  created_on: string;
  contact: {
    id: number;
    broadcast_id: string;
    phone_number: string;
    language: string;
    sms_paid: number;
    voice_paid: number;
    created_on: string;
  };
};

export default Session;
