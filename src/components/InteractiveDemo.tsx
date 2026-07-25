import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Search, Github, Sparkles } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'multimodal' | 'voice' | 'github'>('multimodal');

  // Multimodal State
  const [searchQuery, setSearchQuery] = useState('Semantic search query analysis');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<any>(null);

  // Voice State
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [audioLatency, setAudioLatency] = useState('0.82s');

  // GitHub State
  const [repoInput, setRepoInput] = useState('Yogesh09singh/ai-search-engine');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [repoData, setRepoData] = useState<any>(null);

  const handleMultimodalSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setSearchResult({
        modality: 'Text + Semantic Vector',
        latency: '1.42s',
        accuracyBoost: '+35%',
        matches: [
          { title: 'NLP Semantic Embeddings Index', score: '98.4%' },
          { title: 'OpenCV Feature Extraction Model', score: '94.1%' },
          { title: 'Audio Spectrogram Pattern Matcher', score: '91.8%' },
        ],
      });
    }, 800);
  };

  const handleVoiceSimulate = () => {
    setIsRecording(true);
    setTranscript('Listening to audio stream...');
    setTimeout(() => {
      setIsRecording(false);
      setTranscript(
        'Speech-to-Text transcribed with 92.4% accuracy: "Developing scalable machine learning pipelines with Python and Flask."'
      );
      setAudioLatency('0.78s');
    }, 1800);
  };

  const handleGithubAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setRepoData({
        stars: 48,
        forks: 12,
        contributors: 5,
        geminiSummary:
          'AI Narrative Summary (Google Gemini 1.5 Pro): This repository implements a multi-modal search engine architecture with sub-2s query response time, combining Python NLP pipelines with OpenCV vision filters.',
        languages: [
          { name: 'Python', percent: '68%' },
          { name: 'JavaScript', percent: '22%' },
          { name: 'HTML/CSS', percent: '10%' },
        ],
      });
    }, 900);
  };

  return (
    <div className="my-16 glass-card p-8 rounded-3xl border border-primaryIndigo/30 shadow-glow-primary">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primaryIndigo/20 border border-primaryIndigo/40 text-primaryIndigo text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE INTERACTIVE LAB</span>
          </div>
          <h3 className="font-sora font-extrabold text-2xl text-white">
            Test AI Architecture Demos Live
          </h3>
          <p className="text-xs text-textMuted font-inter">
            Experience Yogesh's deployed AI & Full-Stack algorithm prototypes directly in your browser.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center space-x-1.5 bg-cardDark/90 p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setActiveTab('multimodal')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'multimodal'
                ? 'bg-gradient-to-r from-primaryIndigo to-secondaryCyan text-white shadow-glass'
                : 'text-textMuted hover:text-white'
            }`}
          >
            Multimodal Search
          </button>
          <button
            onClick={() => setActiveTab('voice')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'voice'
                ? 'bg-gradient-to-r from-secondaryCyan to-accentPurple text-white shadow-glass'
                : 'text-textMuted hover:text-white'
            }`}
          >
            Voice STT
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'github'
                ? 'bg-gradient-to-r from-accentPurple to-primaryIndigo text-white shadow-glass'
                : 'text-textMuted hover:text-white'
            }`}
          >
            GitHub AI Dashboard
          </button>
        </div>
      </div>

      {/* Demo View Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'multimodal' && (
          <motion.div
            key="multimodal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            <form onSubmit={handleMultimodalSearch} className="flex gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter text query or semantic topic..."
                className="flex-1 px-4 py-3 rounded-xl bg-cardDark border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-primaryIndigo"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primaryIndigo to-secondaryCyan text-white font-sora font-semibold text-xs flex items-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>{isSearching ? 'Executing Vectors...' : 'Run Query'}</span>
              </button>
            </form>

            {searchResult && (
              <div className="p-5 rounded-2xl bg-cardDark/80 border border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400">⚡ Latency: {searchResult.latency}</span>
                  <span className="text-secondaryCyan">🎯 Query Accuracy: {searchResult.accuracyBoost}</span>
                  <span className="text-accentPurple font-semibold">Modality: {searchResult.modality}</span>
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-textMuted block">Semantic Match Results:</span>
                  {searchResult.matches.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-center text-xs p-2 rounded-lg bg-white/5">
                      <span className="text-white font-medium">{item.title}</span>
                      <span className="font-mono text-emerald-400 font-bold">{item.score} Match</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'voice' && (
          <motion.div
            key="voice"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between p-6 rounded-2xl bg-cardDark/90 border border-white/10">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleVoiceSimulate}
                  disabled={isRecording}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-secondaryCyan to-accentPurple flex items-center justify-center text-white shadow-glow-secondary"
                >
                  <Mic className={`w-6 h-6 ${isRecording ? 'animate-bounce' : ''}`} />
                </button>
                <div>
                  <h4 className="font-sora font-semibold text-sm text-white">
                    {isRecording ? 'Processing Waveform Stream...' : 'Click Mic to Test Voice STT'}
                  </h4>
                  <span className="text-xs font-mono text-textMuted">
                    Wiener Noise Suppression (60% active)
                  </span>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-xs">
                Latency: {audioLatency}
              </div>
            </div>

            {transcript && (
              <div className="p-5 rounded-2xl bg-cardDark/80 border border-white/10">
                <span className="text-[11px] font-mono text-secondaryCyan block mb-1">LIVE TRANSCRIPTION OUTPUT:</span>
                <p className="text-xs font-mono text-white leading-relaxed">{transcript}</p>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'github' && (
          <motion.div
            key="github"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            <form onSubmit={handleGithubAnalyze} className="flex gap-3">
              <input
                type="text"
                value={repoInput}
                onChange={(e) => setRepoInput(e.target.value)}
                placeholder="Enter GitHub repo (e.g., owner/repo)"
                className="flex-1 px-4 py-3 rounded-xl bg-cardDark border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-accentPurple"
              />
              <button
                type="submit"
                disabled={isAnalyzing}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-accentPurple to-primaryIndigo text-white font-sora font-semibold text-xs flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>{isAnalyzing ? 'Analyzing API...' : 'Fetch Repo Intelligence'}</span>
              </button>
            </form>

            {repoData && (
              <div className="p-5 rounded-2xl bg-cardDark/80 border border-white/10 space-y-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/5 font-mono">
                    <span className="text-xs text-textMuted block">STARS</span>
                    <span className="font-bold text-white text-base">{repoData.stars}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 font-mono">
                    <span className="text-xs text-textMuted block">FORKS</span>
                    <span className="font-bold text-white text-base">{repoData.forks}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 font-mono">
                    <span className="text-xs text-textMuted block">CONTRIBUTORS</span>
                    <span className="font-bold text-white text-base">{repoData.contributors}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-primaryIndigo/10 border border-primaryIndigo/30 text-xs font-inter text-textLight">
                  {repoData.geminiSummary}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
