import { useEffect, useRef } from 'react';
import { Heart, MapPin, User, Flag, Sparkles } from 'lucide-react';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const identityCards = [
    {
      icon: <User className="w-8 h-8" />,
      label: 'Name',
      value: 'Rayan Khan',
    },
    {
      icon: <Flag className="w-8 h-8" />,
      label: 'Ethnicity',
      value: 'Pukhtoon',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      label: 'City',
      value: 'Islamabad',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      label: 'Status',
      value: 'Alhamdulillah Proud Pathan',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10">
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[100px] animate-pulse" />

        {/* Main Name - Arabic/Urdu Style */}
        <div className="text-center animate-fade-in-up">
          <h1 className="font-arabic text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wide">
            <span className="gradient-text neon-glow">ریــّْـــٱن خـــّْـــــان ﾒ</span>
          </h1>
        </div>

        {/* PUKHTOON ALHUMDULLILAH */}
        <div className="mt-6 animate-fade-in-up delay-200">
          <p className="font-cyber text-2xl md:text-4xl font-bold tracking-[0.3em] text-yellow-400 animate-pulse-neon">
            PUKHTOON ALHUMDULLILAH
          </p>
        </div>

        {/* Quran Verse */}
        <div className="mt-10 animate-fade-in-up delay-300">
          <div className="glass px-8 py-6 rounded-xl border border-yellow-400/30">
            <p className="font-arabic text-3xl md:text-5xl text-center text-yellow-400/90 leading-relaxed">
              فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-10 max-w-3xl mx-auto animate-fade-in-up delay-400">
          <div className="quote-box p-8 rounded-r-xl">
            <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed pl-4">
              Even without a crown, Pathan people walk like a king because dignity is in their DNA.
            </p>
          </div>
        </div>

        {/* Emojis */}
        <div className="mt-10 flex gap-4 md:gap-6 text-3xl md:text-5xl animate-fade-in-up delay-500">
          <span className="emoji-bounce">🫀</span>
          <span className="emoji-bounce">🫶</span>
          <span className="emoji-bounce">❤️‍🩹</span>
          <span className="emoji-bounce">🚩</span>
          <span className="emoji-bounce">💀</span>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-yellow-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <h2 className="font-cyber text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="gradient-text">About Me</span>
            </h2>
          </div>

          <div className="animate-on-scroll delay-200">
            <div className="glass p-8 md:p-12 rounded-2xl border border-yellow-400/20 neon-box">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                I am <span className="text-yellow-400 font-semibold">Rayan Khan</span>, a proud{' '}
                <span className="text-yellow-400 font-semibold">Pukhtoon</span> from{' '}
                <span className="text-yellow-400 font-semibold">Islamabad</span>. I believe in dignity, honor, and faith. 
                My identity reflects strength, culture, and respect for traditions.
              </p>

              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                  <span className="font-cyber tracking-wider">PUKHTOON PRIDE</span>
                  <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll">
            <h2 className="font-cyber text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="gradient-text">Identity</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {identityCards.map((card, index) => (
              <div
                key={card.label}
                className={`animate-on-scroll delay-${(index + 1) * 100}`}
              >
                <div className="glass p-6 rounded-xl border border-yellow-400/20 card-hover text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                      {card.icon}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                    {card.label}
                  </p>
                  <p className="text-white font-semibold text-lg">{card.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-on-scroll">
            <h2 className="font-cyber text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="gradient-text">Banner</span>
            </h2>
          </div>

          <div className="animate-on-scroll delay-200">
            <div className="relative group">
              {/* Glow Effect Behind Image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 via-yellow-400/40 to-yellow-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative glass p-2 rounded-2xl border border-yellow-400/30 animate-border-glow overflow-hidden">
                <img
                  src="/rayan-banner.jpg"
                  alt="Rayan Khan - Pukhtoon"
                  className="w-full h-auto rounded-xl object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 z-10 border-t border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/50" />
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/50" />
            </div>

            {/* Footer Text */}
            <p className="font-cyber text-lg md:text-xl text-gray-300 tracking-wider">
              <span className="text-yellow-400">©</span> Rayan Khan{' '}
              <span className="text-yellow-400">|</span> Proud Pukhtoon{' '}
              <span className="text-yellow-400">|</span> Alhamdulillah
            </p>

            {/* Bottom Emojis */}
            <div className="mt-6 flex justify-center gap-3 text-xl">
              <span>🫀</span>
              <span>🫶</span>
              <span>❤️‍🩹</span>
              <span>🚩</span>
              <span>💀</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
