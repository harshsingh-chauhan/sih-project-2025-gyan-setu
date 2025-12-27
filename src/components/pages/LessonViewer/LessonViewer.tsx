import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMultilingual } from '../../../hooks/useMultilingual';
import { db } from '../../../services/storage/dexie.db';
import type { Lesson } from '../../../types';
import { useContentDownload } from '../../../hooks/useContentDownload';

// Helper component to handle download logic which requires a non-null lesson
const LessonDownloadAction: React.FC<{ lesson: Lesson; onUpdate: (l: Lesson) => void }> = ({ lesson, onUpdate }) => {
    const { t } = useTranslation();
    const { isDownloading, progress, downloadLesson } = useContentDownload(lesson);

    const handleClick = async () => {
        if (lesson.downloadStatus === 'not_downloaded') {
            await downloadLesson();
             const updated = await db.lessons.get(lesson.id);
             if (updated) onUpdate(updated);
        }
    };

    return (
        <button 
            onClick={handleClick}
            disabled={isDownloading || lesson.downloadStatus === 'downloaded'}
            className="flex items-center justify-between w-full p-4 rounded-lg bg-gray-50 dark:bg-[#162013] border border-gray-200 dark:border-[#2e4328] hover:border-primary dark:hover:border-primary group transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
        >
            <div className="flex items-center gap-3 relative z-10">
                <div className={`bg-gray-200 dark:bg-[#2e4328] p-2 rounded-full text-gray-600 dark:text-white group-hover:bg-primary group-hover:text-white transition-colors ${lesson.downloadStatus === 'downloaded' ? 'bg-primary text-white' : ''}`}>
                    <span className="material-symbols-outlined">{lesson.downloadStatus === 'downloaded' ? 'check' : 'download'}</span>
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold text-[#111418] dark:text-white">
                        {lesson.downloadStatus === 'downloaded' ? t('progress.completed') : t('common.download')}
                    </p>
                    <p className="text-xs text-gray-500">Video & Quiz (45MB)</p>
                </div>
            </div>
            {isDownloading && (
                <>
                    <div className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300" style={{ width: `${progress}%` }}></div>
                    <span className="text-xs font-bold text-primary relative z-10">{progress}%</span>
                </>
            )}
        </button>
    );
};

/**
 * LessonViewer component displays the content of a specific lesson.
 * Matches the "GyaanSetu - Lesson Viewer" design.
 */
export const LessonViewer: React.FC = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const { getLocalized } = useMultilingual();
    
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'transcript' | 'resources'>('overview');

    const fetchLesson = async () => {
        if (!id) return;
        try {
            const data = await db.lessons.get(id);
            if (data) {
                setLesson(data);
                await db.lessons.update(id, { lastAccessed: Date.now() });
            } else {
                setError('Lesson not found');
            }
        } catch (err) {
            console.error('Failed to fetch lesson:', err);
            setError('Failed to load lesson');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchLesson();
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-20 space-y-4 w-full">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-gray-500 dark:text-[#a2c398]">Loading lesson content...</p>
            </div>
        );
    }

    if (error || !lesson) {
        return (
            <div className="alert alert-error shadow-lg w-full max-w-2xl mx-auto">
                <span className="material-symbols-outlined">error</span>
                <span>{error || 'Lesson not found'}</span>
            </div>
        );
    }

    const title = getLocalized(lesson.title) || 'Untitled Lesson';
    const content = getLocalized(lesson.content) || 'No content available.';
    
    // Find video media if exists
    const videoMedia = lesson.media?.find(m => m.type === 'video');
    const thumbUrl = lesson.thumbnail || "https://lh3.googleusercontent.com/aida-public/AB6AXuCsG4MQddyLTxTIvmHRC6DN2biVR0_d3PF4Z63XqrnQspbNEEqYydS82A-DIMc5d62MnSbIXwmqJNxDhwkahbXOa6ooqAG1rXKEC3pVdEc04GhEVeE3DhZ2pmIopJjH8pmKv9oESPb25kxCnh2lEekzOXj2IghcLnO5e3XMqHVVahcyQ4vTfrvqescuNC4PcY2BE5ZGDoJNkwLhJC8p2bYn32Py7NJaOHXl9bEHpAqcXCiL5v8NWg120K1M8JjJ6ML3n8VTkneUmG8";

    return (
        <>
            {/* Left Column: Media Player & Content */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">
                {/* Video Player */}
                <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group shadow-xl ring-1 ring-white/10">
                    {videoMedia ? (
                        <video controls className="w-full h-full object-cover">
                            <source src={videoMedia.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <>
                            <div 
                                className="absolute inset-0 bg-cover bg-center opacity-80" 
                                style={{ backgroundImage: `url('${thumbUrl}')` }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <button className="flex items-center justify-center rounded-full size-16 md:size-20 bg-primary/90 text-white hover:bg-primary hover:scale-105 transition-all shadow-[0_0_30px_rgba(83,210,45,0.4)] backdrop-blur-sm">
                                    <span className="material-symbols-outlined !text-[40px] md:!text-[48px] ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                </button>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 pb-4 px-4 md:px-6 flex flex-col gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                <div className="group/slider relative h-1 hover:h-2 bg-white/30 rounded-full cursor-pointer transition-all">
                                    <div className="absolute h-full bg-primary rounded-full w-[35%]"></div>
                                    <div className="absolute h-3 w-3 bg-white rounded-full top-1/2 -translate-y-1/2 left-[35%] opacity-0 group-hover/slider:opacity-100 shadow-md"></div>
                                </div>
                                <div className="flex items-center justify-between text-white mt-1">
                                    <div className="flex items-center gap-4">
                                        <button className="hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                        </button>
                                        <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide">
                                            <span>3:45</span>
                                            <span className="text-white/50">/</span>
                                            <span>12:30</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="relative group/lang">
                                            <button className="flex items-center gap-1 hover:text-primary transition-colors px-2 py-1 rounded hover:bg-white/10">
                                                <span className="material-symbols-outlined text-[20px]">closed_caption</span>
                                                <span className="text-xs font-bold uppercase">{t('common.language').substring(0, 3)}</span>
                                            </button>
                                        </div>
                                        <button className="hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">settings</span>
                                        </button>
                                        <button className="hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">fullscreen</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 flex gap-2">
                                <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider">HD 720p</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Alternative Content View (Tabs) */}
                <div className="flex border-b border-gray-200 dark:border-[#2e4328] gap-6">
                    <button 
                        onClick={() => setActiveTab('overview')}
                        className={`pb-3 border-b-2 font-medium text-sm transition-colors ${activeTab === 'overview' ? 'border-primary text-primary font-bold' : 'border-transparent text-gray-500 dark:text-[#a2c398] hover:text-primary'}`}
                    >
                        {t('common.about')}
                    </button>
                    <button 
                        onClick={() => setActiveTab('transcript')}
                        className={`pb-3 border-b-2 font-medium text-sm transition-colors ${activeTab === 'transcript' ? 'border-primary text-primary font-bold' : 'border-transparent text-gray-500 dark:text-[#a2c398] hover:text-primary'}`}
                    >
                        Transcript
                    </button>
                    <button 
                        onClick={() => setActiveTab('resources')}
                        className={`pb-3 border-b-2 font-medium text-sm transition-colors ${activeTab === 'resources' ? 'border-primary text-primary font-bold' : 'border-transparent text-gray-500 dark:text-[#a2c398] hover:text-primary'}`}
                    >
                        Resources
                    </button>
                </div>

                {/* Article Content */}
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    {activeTab === 'overview' && (
                        <>
                            <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-2">{title}</h3>
                            {typeof content === 'string' ? (
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            ) : (
                                <div className="bg-base-200 p-4 rounded-lg font-mono text-sm overflow-auto">
                                    {JSON.stringify(content, null, 2)}
                                </div>
                            )}
                        </>
                    )}
                    {activeTab === 'transcript' && <p>Transcript not available for this lesson.</p>}
                    {activeTab === 'resources' && (
                        <div className="flex flex-col gap-2">
                            {lesson.media?.map((m, i) => (
                                <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-[#152012] rounded">
                                    <span className="material-symbols-outlined">{m.type === 'video' ? 'movie' : 'image'}</span>
                                    <span className="text-sm truncate">{m.url.split('/').pop()}</span>
                                </div>
                            )) || <p>No additional resources.</p>}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Column: Sidebar Actions & Info */}
            <div className="w-full lg:w-[360px] flex flex-col gap-6 shrink-0">
                {/* Metadata Card */}
                <div className="bg-white dark:bg-[#1e2c1a] rounded-lg p-6 border border-gray-200 dark:border-[#2e4328] shadow-sm flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2 mb-1">
                            <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold">{lesson.subject}</span>
                            <span className="px-2 py-1 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold">Medium Difficulty</span>
                        </div>
                        <h1 className="text-2xl font-bold text-[#111418] dark:text-white leading-tight">{title}</h1>
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-[#8b9e87] font-medium mt-1">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">schedule</span>
                                15 Mins
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">visibility</span>
                                1.2k Views
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">translate</span>
                                3 Languages
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-200 dark:border-[#2e4328]"/>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <LessonDownloadAction lesson={lesson} onUpdate={fetchLesson} />

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-primary hover:bg-primary/90 text-[#152012] font-bold transition-colors shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined">check_circle</span>
                                <span className="text-sm">{t('progress.completed')}</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-white dark:bg-[#253620] border border-gray-200 dark:border-[#3e5634] text-[#111418] dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-[#2e4328] transition-colors">
                                <span className="material-symbols-outlined text-primary">psychology</span>
                                <span className="text-sm">Take Quiz</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Notes Section */}
                <div className="bg-white dark:bg-[#1e2c1a] rounded-lg p-6 border border-gray-200 dark:border-[#2e4328] shadow-sm flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-[#111418] dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">edit_note</span>
                            My Notes
                        </h3>
                        <button className="text-xs font-bold text-primary hover:text-white transition-colors uppercase tracking-wider">{t('common.save')}</button>
                    </div>
                    <textarea 
                        className="w-full flex-1 min-h-[150px] bg-gray-50 dark:bg-[#152012] border border-gray-200 dark:border-[#2e4328] rounded-lg p-4 text-sm text-[#111418] dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all" 
                        placeholder="Type your key takeaways here..."
                    ></textarea>
                    <p className="text-xs text-gray-400 italic">Notes are saved locally on your device.</p>
                </div>

                {/* Next Lesson Teaser */}
                <a className="bg-gray-100 dark:bg-[#253620] p-4 rounded-lg border border-transparent hover:border-primary/50 flex items-center justify-between group transition-all" href="#">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 dark:text-[#8b9e87] font-bold uppercase">Up Next</span>
                        <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Chapter 5: Cell Structures</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">arrow_forward</span>
                </a>
            </div>
        </>
    );
};

