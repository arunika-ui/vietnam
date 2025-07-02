import ReCAPTCHA from "react-google-recaptcha";
import { Dispatch, SetStateAction } from "react";

interface CaptchaBoxProps {
  setIsVerified: Dispatch<SetStateAction<boolean>>;
}
function CaptchaBox({ setIsVerified }: CaptchaBoxProps) {
  const handleCaptchaChange = (token: string | null) => {
    console.log(token);
    if (token) {
      setIsVerified(true);
      console.log("Verified with token:", token);
      // send token to your backend for verification
    } else {
      setIsVerified(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full scale-80 md:scale-100">
        <ReCAPTCHA
          sitekey="6LdDHhArAAAAAJQD0xOky5rTW7E91eO-m3LDke9u" // replace with your actual site key
          onChange={handleCaptchaChange}
          size="normal"
        />
      </div>
    </div>
  );
}

export default CaptchaBox;
