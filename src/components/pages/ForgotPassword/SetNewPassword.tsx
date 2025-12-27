import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const SetNewPassword: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('MySecurePa');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Password reset successfully');
    navigate('/login');
  };

  return (
    <div className="bg-background-light dark:bg-setpwd-bg-dark font-display min-h-screen flex flex-col items-center justify-center p-4 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Auth Container */}
      <div className="w-full max-w-[500px] bg-white dark:bg-setpwd-card-dark rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-setpwd-border-dark relative animate-in fade-in zoom-in duration-300">
        
        {/* Header Image & Logo Overlay */}
        <div 
          className="h-40 w-full bg-cover bg-center relative" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTwya88UPBRMPj0yncdgUDq8RkD5N0HXsFMkiSFJ4IgSFOhtKKmgIE0jrxIvbUziMmTR_1GY0Ex7V7gMSK50k7bKmgPq71mqIqJYud-SD_fbUu2lh1Yl2a21TU4T384VSAiv1RwhfbM2bl5Aj-WJ05hqSi3SX6EGh5kSISjd79e-PMFKuNlsTZOM0MQDaGVe8_waUS3LsdRgWCjafdxbLJXUVpyQWi3OTJKxJ1tNAB-pXoc5z9pg5UEGH6R3wLvwcDTgdOy1yty94')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-setpwd-card-dark via-setpwd-card-dark/50 to-transparent"></div>
          {/* Logo Badge */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="h-20 w-20 bg-setpwd-bg-dark border-4 border-setpwd-card-dark rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-setpwd-primary text-[40px]">school</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="pt-12 pb-8 px-6 sm:px-10 flex flex-col gap-6">
          {/* Page Heading */}
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-2xl font-bold leading-tight">Set New Password</h1>
            <p className="text-gray-500 dark:text-setpwd-text-sec text-sm font-normal">Please create a secure password for your GyaanSetu account.</p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            
            {/* New Password Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium dark:text-gray-200" htmlFor="new-password">New Password</label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-setpwd-text-sec flex items-center justify-center">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <input 
                  className="w-full h-12 pl-12 pr-12 rounded-lg border border-gray-300 dark:border-setpwd-input-border bg-gray-50 dark:bg-setpwd-surface-dark text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-setpwd-primary/50 focus:border-setpwd-primary placeholder:text-gray-400 dark:placeholder:text-[#6a8f60] transition-all" 
                  id="new-password" 
                  placeholder="Enter new password" 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  className="absolute right-0 h-full w-12 text-setpwd-text-sec hover:text-setpwd-primary transition-colors flex items-center justify-center rounded-r-lg focus:outline-none" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Password Strength */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <p className="text-sm font-medium dark:text-gray-300">Password Strength</p>
                <p className="text-xs font-medium text-setpwd-primary">Good</p>
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-setpwd-border-dark rounded-full overflow-hidden">
                <div className="h-full bg-setpwd-primary rounded-full transition-all duration-300" style={{ width: '65%' }}></div>
              </div>
            </div>

            {/* Requirements Checklist */}
            <div className="flex flex-col gap-2 pl-1">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-setpwd-primary text-[20px] font-bold">check</span>
                <p className="text-sm text-gray-700 dark:text-[#d0e6ca]">At least 8 characters</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-setpwd-primary text-[20px] font-bold">check</span>
                <p className="text-sm text-gray-700 dark:text-[#d0e6ca]">Includes a number</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-400 dark:text-[#5c7a52] text-[20px]">close</span>
                <p className="text-sm text-gray-500 dark:text-[#809e75]">Includes a special character</p>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-2 pt-2">
              <label className="text-sm font-medium dark:text-gray-200" htmlFor="confirm-password">Confirm New Password</label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-setpwd-text-sec flex items-center justify-center">
                  <span className="material-symbols-outlined">lock_reset</span>
                </div>
                <input 
                  className="w-full h-12 pl-12 pr-12 rounded-lg border border-gray-300 dark:border-setpwd-input-border bg-gray-50 dark:bg-setpwd-surface-dark text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-setpwd-primary/50 focus:border-setpwd-primary placeholder:text-gray-400 dark:placeholder:text-[#6a8f60] transition-all" 
                  id="confirm-password" 
                  placeholder="Re-enter new password" 
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button 
                  className="absolute right-0 h-full w-12 text-setpwd-text-sec hover:text-setpwd-primary transition-colors flex items-center justify-center rounded-r-lg focus:outline-none" 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span className="material-symbols-outlined">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                className="w-full h-14 bg-setpwd-primary hover:bg-[#3ec41a] active:bg-[#36aa17] text-black font-bold text-lg rounded-lg transition-colors shadow-[0_4px_14px_0_rgba(76,223,32,0.39)] hover:shadow-[0_6px_20px_rgba(76,223,32,0.23)] flex items-center justify-center gap-2" 
                type="submit"
              >
                <span>Set New Password</span>
              </button>
            </div>

            {/* Back Link */}
            <div className="text-center mt-2">
              <Link className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-setpwd-text-sec hover:text-setpwd-primary transition-colors group" to="/login">
                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
