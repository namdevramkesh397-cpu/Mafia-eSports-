import React, { useState } from 'react';
import { Download, Smartphone, X, Share2, ExternalLink, ChevronRight, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

const APK_DIRECT_URL =
  'https://github.com/namdevramkesh397-cpu/Mafia-eSports/releases/latest/download/Mafia-eSports.apk';
const APK_RELEASES_URL =
  'https://github.com/namdevramkesh397-cpu/Mafia-eSports/releases';

interface PWAInstallButtonProps {
  variant?: 'banner' | 'profile-card' | 'menu-item' | 'compact';
  onActionComplete?: () => void;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'banner',
  onActionComplete,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);

  // Suppress install UI if already running as installed standalone PWA
  if (isInstalled) {
    return null;
  }

  const handlePrimaryInstall = async () => {
    if (isInstallable) {
      const ok = await install();
      if (ok) {
        onActionComplete?.();
        return;
      }
    }
    setShowGuideModal(true);
  };

  return (
    <>
      {variant === 'banner' && (
        <div className="mx-4 mt-3 mb-1 rounded-2xl bg-gradient-to-r from-[#13254b] via-[#182e5c] to-[#112042] border border-cyan-500/30 p-3 shadow-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-md">
              <Smartphone size={20} className="text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black text-white uppercase tracking-tight truncate">
                Install Mafia eSports App
              </p>
              <p className="text-[10px] text-cyan-200/80 font-medium truncate">
                {isInstallable
                  ? '1-tap instant mobile app install'
                  : 'Install as Mobile App or Download APK'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePrimaryInstall}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 active:scale-95 text-slate-950 font-black text-[10px] uppercase tracking-wider shrink-0 flex items-center gap-1.5 shadow-md transition-all"
          >
            <Download size={13} />
            <span>{isInstallable ? 'Install' : 'Get App'}</span>
          </button>
        </div>
      )}

      {variant === 'profile-card' && (
        <button
          type="button"
          onClick={handlePrimaryInstall}
          className="w-full bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100/80 hover:to-blue-100/80 active:bg-blue-100 rounded-xl sm:rounded-2xl px-4 py-3.5 flex items-center justify-between border border-cyan-200 shadow-xs group transition-all"
        >
          <div className="flex items-center gap-3.5">
            <div className="text-blue-600">
              <Download size={20} className="stroke-[2.2]" />
            </div>
            <div className="text-left">
              <span className="text-sm font-bold text-slate-900 tracking-tight block">
                Install App / Download APK
              </span>
              <span className="text-[10px] font-semibold text-blue-700 block">
                {isInstallable ? 'Ready for instant 1-tap install' : 'PWA Mobile Install & Android APK'}
              </span>
            </div>
          </div>
          <ChevronRight size={18} className="text-blue-600 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {variant === 'menu-item' && (
        <button
          type="button"
          onClick={handlePrimaryInstall}
          className="w-full p-3.5 rounded-2xl bg-[#0b1b38]/70 hover:bg-[#10244c] border border-cyan-500/30 hover:border-cyan-400/50 flex items-center justify-between transition-all group active:scale-[0.98]"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl border bg-cyan-600/20 text-cyan-400 border-cyan-500/30 flex items-center justify-center shrink-0">
              <Download size={18} />
            </div>
            <div className="text-left min-w-0">
              <p className="text-xs font-black uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors truncate">
                Install App / Get APK
              </p>
              <p className="text-[10px] text-slate-400 font-medium truncate">
                Install on Home Screen or download Android APK
              </p>
            </div>
          </div>
          <ChevronRight size={16} className="text-slate-500 group-hover:text-white transition-colors shrink-0 ml-2" />
        </button>
      )}

      {variant === 'compact' && (
        <button
          type="button"
          onClick={handlePrimaryInstall}
          className="w-full py-2.5 px-4 rounded-xl bg-neutral-800/90 hover:bg-neutral-700 border border-white/10 text-xs font-bold text-cyan-300 flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <Download size={15} />
          <span>{isInstallable ? 'Install Mobile App' : 'Install App / Download APK'}</span>
        </button>
      )}

      {/* Dual Install Options Modal (PWA + Android APK) */}
      {showGuideModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={() => setShowGuideModal(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-[#0b1730] border border-[#223963] p-5 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <img
                  src="/pwa-192x192.png"
                  alt="Mafia eSports"
                  className="w-9 h-9 rounded-xl object-cover border border-white/10"
                />
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-white">
                    Install Mafia eSports
                  </h3>
                  <p className="text-[10px] text-cyan-400 font-semibold">
                    Choose your mobile install option
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGuideModal(false)}
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {/* Option 1: Direct Web App (PWA) */}
              <div className="rounded-2xl bg-[#102042] border border-cyan-500/30 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-cyan-300 flex items-center gap-1.5">
                    <Smartphone size={14} /> Option 1: Instant Mobile App (PWA)
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Ready
                  </span>
                </div>

                {isInstallable ? (
                  <button
                    type="button"
                    onClick={async () => {
                      const ok = await install();
                      if (ok) setShowGuideModal(false);
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Download size={15} />
                    Install Now (1-Tap)
                  </button>
                ) : isIOS ? (
                  <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                    <p>
                      1. Tap the <Share2 size={12} className="inline mx-0.5 text-cyan-300" />{' '}
                      <strong className="text-white">Share</strong> button in Safari.
                    </p>
                    <p>
                      2. Scroll down and tap <strong className="text-white">Add to Home Screen</strong>.
                    </p>
                  </div>
                ) : (
                  <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                    <p>
                      1. Open this app in <strong className="text-white">Chrome</strong> (if inside preview, open the app link in a new tab).
                    </p>
                    <p>
                      2. Tap Chrome menu (<strong className="text-white">⋮</strong>) &rarr;{' '}
                      <strong className="text-white">Install app</strong> /{' '}
                      <strong className="text-white">Add to Home screen</strong>.
                    </p>
                  </div>
                )}
              </div>

              {/* Option 2: Android APK */}
              <div className="rounded-2xl bg-[#102042] border border-purple-500/30 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-purple-300 flex items-center gap-1.5">
                    <Download size={14} /> Option 2: Android APK File
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">GitHub Build</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Push to <strong className="text-white">namdevramkesh397-cpu/Mafia-eSports</strong> to auto-build <code className="text-purple-300">Mafia-eSports.apk</code> via GitHub Actions, then download from Releases:
                </p>
                <div className="flex gap-2">
                  <a
                    href={APK_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Download size={14} />
                    Download APK
                  </a>
                  <a
                    href={APK_RELEASES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                  >
                    <ExternalLink size={13} />
                    Releases
                  </a>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowGuideModal(false)}
              className="mt-4 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
