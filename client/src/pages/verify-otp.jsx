import { useState, useRef, useEffect } from "react"
import Logo from '../../public/images/logo.svg'
import { Link, useNavigate } from "react-router-dom"


export default function VerifyOtp() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const [email] = useState("john.doe@example.com")
    const [timer, setTimer] = useState(30)  
    const [canResend, setCanResend] = useState(false)
    const inputRefs = useRef([])

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1)
            }, 1000)
            return () => clearInterval(interval)
        } else {
            setCanResend(true)
        }
    }, [timer])

    const handleOtpChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)

            // Auto-focus next input
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus()
            }
        }
    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
        const newOtp = [...otp]

        for (let i = 0; i < pastedData.length && i < 6; i++) {
            newOtp[i] = pastedData[i]
        }
        setOtp(newOtp)

        // Focus the next empty input or the last input
        const nextIndex = Math.min(pastedData.length, 5)
        inputRefs.current[nextIndex]?.focus()
    }

    const handleContinue = () => {
        if (otp.every(digit => digit !== "")) {
            console.log("OTP entered:", otp.join(""))
            // Navigate to next step or verify OTP
        }
        navigate("/reset-password")
    }

    const handleResend = () => {
        if (canResend) {
            setTimer(30)
            setCanResend(false)
            setOtp(["", "", "", "", "", ""])
            inputRefs.current[0]?.focus()
            console.log("OTP resent to:", email)
        }
    }

    const isOtpComplete = otp.every(digit => digit !== "")

    return (
        <div className="min-h-screen flex relative">
            <div className="hidden lg:flex lg:w-[25%] bg-gradient-to-br from-purple-100 to-purple-200 items-center justify-center p-8">
                <div className="text-center">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-4">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-end md:p-8 p-4 bg-white max-lg:relative">
                <div className="absolute lg:right-10 top-6 text-sm inter-tight-400 text-gray-600">
                    Back to Signin?{" "}
                    <Link to={"/signin"} >
                        <button className="text-gray-900 font-medium hover:underline">
                            Sign in
                        </button>
                    </Link>
                </div>

                <div className="w-full max-w-md space-y-6">
                    <div className="space-y-6">
                        <div className="text-left">
                            <h1 className="text-4xl poppins-700 text-[#000000] mb-2">Enter OTP</h1>
                            <p className="text-[#000000] text-sm inter-tight-400">
                                We've sent a 6-digit code to{" "}
                                <span className="font-medium">{email}</span>
                            </p>
                        </div>

                        <div className="text-center h-[2px] bg-[#D4D4D4]"></div>

                        <div className="space-y-6">
                            {/* OTP Input Fields */}
                            <div className="flex justify-center space-x-3">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        type="text"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        onPaste={handlePaste}
                                        className="w-12 h-12 border border-[#D4D4D4] text-center text-lg font-medium outline-none rounded-xl text-[#000000] focus:border-black transition-colors"
                                        maxLength="1"
                                    />
                                ))}
                            </div>

                            {/* Timer and Resend */}
                            <div className="text-center">
                                {!canResend ? (
                                    <p className="text-[#8A8A8A] text-sm">
                                        Resend code in{" "}
                                        <span className="font-medium text-black">
                                            {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                                        </span>
                                    </p>
                                ) : (
                                    <button
                                        onClick={handleResend}
                                        className="text-black font-medium text-sm hover:underline"
                                    >
                                        Resend Code
                                    </button>
                                )}
                            </div>

                            {/* Continue Button */}
                            <button
                                className={`w-full h-12 ${isOtpComplete
                                        ? "bg-black text-white cursor-pointer"
                                        : "bg-gray-300 text-white cursor-not-allowed"
                                    } inter-tight-700 rounded-xl transition-colors`}
                                disabled={!isOtpComplete}
                                onClick={handleContinue}
                            >
                                Continue
                            </button>

                            <div>
                                <span className="text-[#8A8A8A] text-sm">
                                    This site is protected by reCAPTCHA and the Google Privacy Policy.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}