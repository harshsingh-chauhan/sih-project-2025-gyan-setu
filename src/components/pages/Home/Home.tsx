import React from 'react';
import { BookOpen, Trophy, Clock } from 'lucide-react';

export const Home: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="hero bg-base-200 rounded-box p-8">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome back!</h1>
                        <p className="py-6">Continue your learning journey with Gyan Setu. Explore new lessons or pick up where you left off.</p>
                        <button className="btn btn-primary">Resume Last Lesson</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card bg-primary text-primary-content shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center gap-2">
                            <BookOpen size={24} />
                            <h2 className="card-title">Active Lessons</h2>
                        </div>
                        <p className="text-3xl font-bold">4</p>
                    </div>
                </div>
                <div className="card bg-secondary text-secondary-content shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center gap-2">
                            <Trophy size={24} />
                            <h2 className="card-title">Points Earned</h2>
                        </div>
                        <p className="text-3xl font-bold">1250</p>
                    </div>
                </div>
                <div className="card bg-accent text-accent-content shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center gap-2">
                            <Clock size={24} />
                            <h2 className="card-title">Study Time</h2>
                        </div>
                        <p className="text-3xl font-bold">12h 30m</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">Recommended for You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="card bg-base-100 shadow-xl border border-base-300">
                        <figure><img src={`https://picsum.photos/seed/${i}/400/225`} alt="Lesson thumbnail" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Digital Literacy Part {i}</h2>
                            <p>Introduction to basic computer operations and internet safety.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-outline">Start Lesson</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
