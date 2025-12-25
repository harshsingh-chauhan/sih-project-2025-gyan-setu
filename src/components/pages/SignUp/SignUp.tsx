import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for signup logic
        navigate('/');
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="input input-bordered w-full" 
                    required 
                />
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Phone Number</span>
                </label>
                <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="input input-bordered w-full" 
                    required 
                />
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Set 4-digit PIN</span>
                </label>
                <input 
                    type="password" 
                    placeholder="Create a PIN" 
                    className="input input-bordered w-full" 
                    maxLength={4}
                    required 
                />
            </div>

            <div className="form-control w-full">
                <label className="label text-sm text-base-content opacity-70">
                    Role
                </label>
                <div className="flex gap-4 mt-1">
                    <label className="label cursor-pointer gap-2">
                        <input type="radio" name="role" className="radio radio-primary" defaultChecked />
                        <span className="label-text">Student</span>
                    </label>
                    <label className="label cursor-pointer gap-2">
                        <input type="radio" name="role" className="radio radio-primary" />
                        <span className="label-text">Teacher</span>
                    </label>
                </div>
            </div>

            <div>
                <button type="submit" className="btn btn-primary w-full">
                    Create Account
                </button>
            </div>

            <div className="text-center mt-4">
                <p className="text-sm text-base-content opacity-70">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-primary hover:text-primary-focus">
                        Sign in
                    </Link>
                </p>
            </div>
        </form>
    );
};
