import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for login logic
        navigate('/');
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                    <span className="label-text">PIN</span>
                </label>
                <input 
                    type="password" 
                    placeholder="Enter 4-digit PIN" 
                    className="input input-bordered w-full" 
                    maxLength={4}
                    required 
                />
            </div>

            <div className="flex items-center justify-between">
                <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text">Remember me</span>
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className="font-medium text-primary hover:text-primary-focus">
                        Forgot PIN?
                    </a>
                </div>
            </div>

            <div>
                <button type="submit" className="btn btn-primary w-full">
                    Sign in
                </button>
            </div>

            <div className="text-center mt-4">
                <p className="text-sm text-base-content opacity-70">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-medium text-primary hover:text-primary-focus">
                        Sign up now
                    </Link>
                </p>
            </div>
        </form>
    );
};
