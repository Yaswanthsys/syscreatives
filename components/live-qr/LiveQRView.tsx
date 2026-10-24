              <button
                onClick={() => setQrModalOpen(false)}
                className="w-full py-1 text-xs text-[#7A6B5C] hover:text-[#2C2621] transition-colors cursor-pointer"
              >
                Back to Wedding Page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 
        ================================================================
        MODAL 2: YOUTUBE WATCH LIVE PLAYER
        ================================================================
      */}
      {youtubeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl p-4 sm:p-6 rounded-3xl bg-[#181818] border border-white/15 text-white shadow-2xl">
            <button
              onClick={() => setYoutubeModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              title="Close Stream"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Youtube className="w-6 h-6 text-red-600 fill-red-600" />
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold">
                  {twinNames} — Wedding Live Stream
                </h3>
                <span className="text-xs text-red-500 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                  LIVE BROADCAST
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1`}
                title={`${twinNames} Wedding Live Stream`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="flex items-center justify-between mt-4 text-xs">
              <span className="text-gray-400">
                Streaming powered by SYS Creatives
              </span>
              <a
                href={youtubeLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
              >
                <span>Open in YouTube App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 
        ================================================================
        MODAL 3: FULL INVITATION CARD VIEWER
        ================================================================
      */}
      {cardModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[92vh] flex flex-col items-center bg-[#FAF8F5] p-3 sm:p-5 rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-y-auto">
            <button
              onClick={() => setCardModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-[#2C2621] transition-colors z-10"
              title="Close Card"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-serif text-xs tracking-widest text-[#8C6D23] font-bold uppercase mb-2">
              Wedding Invitation Card
            </span>

            {/* Invitation Card Image */}
            <div className="relative w-full aspect-[682/1024] rounded-xl overflow-hidden shadow-lg border border-[#D4AF37]/30">
              <Image
                src={invitationCardImage}
                alt="Dileep & Meghana wedding invitation card"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 500px"
              />
            </div>

            <button
              onClick={() => setCardModalOpen(false)}
              className="mt-3 px-6 py-2 rounded-xl bg-[#2C2621] text-white text-xs font-semibold hover:bg-black transition-colors"
            >
              Close Invitation
            </button>
          </div>
        </div>
      )}

      {/* Discreet bottom controls (Home Link + Fullscreen) */}
      <div className="fixed bottom-3 right-3 z-40 flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <Link
          href="/"
          className="p-2 rounded-full bg-white/80 border border-gray-300 text-gray-700 hover:text-black hover:bg-white transition-colors shadow-2xs"
          title="Return to Home"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-full bg-white/80 border border-[#D4AF37]/50 text-[#B8860B] hover:bg-white transition-colors shadow-2xs"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
