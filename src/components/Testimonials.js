import React, { useState } from "react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    review: "Impressed with Rivet's outstanding job on our Project. Their professionalism and expertise exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    source: "Review on Trustpilot",
    stars: 4
  },
  {
    name: "Priya Singh",
    review: "Rivet's team is reliable and courteous, resolving our Workforce issues promptly and with meticulous attention to detail.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    source: "Review on Trustpilot",
    stars: 4
  },
  {
    name: "Arjun Gupta",
    review: "Rivet's rapid response and expert handling of our emergency saved the day. Highly recommend their professional service!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    source: "Review on Google",
    stars: 5
  },
  {
    name: "Vikram Joshi",
    review: "RIVET provided quick and efficient service for our Construction Project, their ontime delivery to deadlines meets expectation.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    source: "Review on Trustpilot",
    stars: 5
  }
];

const IndustryVideoItem = ({ videoId, title, description, placeholderClass, href }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  // Show video if we have a valid video ID and no error
  const showVideo = videoId && !videoError;

  return (
    <a href={href} className="video-item video-link">
      <div className="video-wrapper-container">
        {showVideo ? (
          <>
            {/* YouTube Video */}
            <iframe
              className={`industry-video ${videoLoaded ? 'loaded' : 'loading'}`}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&rel=0&mute=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&widget_referrer=rivet.com`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={false}
              loading="lazy"
              onLoad={handleVideoLoad}
              onError={handleVideoError}
              style={{ pointerEvents: 'none' }}
            ></iframe>
            
            {/* Gradient fallback (hidden when video loads) */}
            <div 
              className={`industry-video industry-placeholder ${placeholderClass} ${videoLoaded ? 'hidden' : 'visible'}`}
            ></div>
          </>
        ) : (
          /* Show gradient if no video ID or error */
          <div className={`industry-video industry-placeholder ${placeholderClass}`}></div>
        )}
      </div>
      <div className="video-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

const Testimonials = () => {
  // Get video IDs from environment variables
  const mechanicalVideoId = process.env.REACT_APP_MECHANICAL_VIDEO_ID;
  const electricalVideoId = process.env.REACT_APP_ELECTRICAL_VIDEO_ID;
  const civilVideoId = process.env.REACT_APP_CIVIL_VIDEO_ID;

  // Debug logging (remove in production)
  console.log('Industry Video Config:', {
    mechanical: mechanicalVideoId ? 'Present' : 'Missing',
    electrical: electricalVideoId ? 'Present' : 'Missing',
    civil: civilVideoId ? 'Present' : 'Missing'
  });

  return (
    <>
      <section className="industry-videos" id="workforce">
        <div className="video-header">
          <a href="#services" className="video-headline">
            <h2>We provide Workforce from</h2>
          </a>
        </div>
        <div className="video-container">
          <IndustryVideoItem
            videoId={mechanicalVideoId}
            title="Mechanical Manufacturing"
            description="Precision engineering and factory operations"
            placeholderClass="mechanical"
            href="#services"
          />
          <IndustryVideoItem
            videoId={electricalVideoId}
            title="Electrical & Electronics"
            description="Advanced electronics and circuit manufacturing"
            placeholderClass="electronics"
            href="#services"
          />
          <IndustryVideoItem
            videoId={civilVideoId}
            title="Construction & Infrastructure"
            description="Building India's future infrastructure"
            placeholderClass="civil"
            href="#services"
          />
        </div>
      </section>
      <section className="testimonials" id="testimonials">
        <h2>What our customers say</h2>
      <p className="testimonials-desc">
        Our customers are at the heart of everything we do. We listen to your needs and tailor our services to meet them.
      </p>
      <div className="testimonials-list">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-stars">
              {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
            </div>
            <p>"{t.review}"</p>
            <div className="testimonial-user">
              <img src={t.avatar} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <div className="testimonial-source">{t.source}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Testimonials; 