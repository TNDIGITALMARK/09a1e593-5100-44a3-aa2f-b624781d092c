export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0
    }}>
      {/* Header */}
      <header style={{
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img
          src="/generated/chupapi_logo.png"
          alt="Chupapi Munano Logo"
          style={{ height: '80px', width: 'auto' }}
        />
      </header>

      {/* Hero Section */}
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 0'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '960px',
          padding: '0 20px'
        }}>
          <img
            src="/generated/chupapi_munano_hero.png"
            alt="Chupapi Munano Hero"
            style={{
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto 32px',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          />
          <h1 style={{
            fontSize: '3.75rem',
            fontWeight: '800',
            marginBottom: '24px',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.1',
            margin: '0 0 24px 0'
          }}>
            Welcome to the Chupapi Munano Zone!
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '500'
          }}>
            The ultimate destination for the viral sensation that took the internet by storm!
          </p>
          <button style={{
            backgroundColor: '#fbbf24',
            color: '#000',
            fontWeight: 'bold',
            padding: '16px 32px',
            borderRadius: '9999px',
            fontSize: '1.25rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            🎉 Join the Fun!
          </button>
        </div>
      </section>

      {/* Content Grid */}
      <section style={{ padding: '64px 20px' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>

          {/* Origin Story */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#8b5cf6',
              margin: '0 0 16px 0'
            }}>🚀 The Origin</h3>
            <p style={{
              color: '#374151',
              lineHeight: '1.6',
              margin: '0'
            }}>
              "Chupapi Munano" became a viral TikTok phrase that captivated millions worldwide.
              This mysterious phrase spread like wildfire across social media platforms,
              becoming an internet phenomenon that brought joy and laughter to countless people.
            </p>
          </div>

          {/* Viral Impact */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#ec4899',
              margin: '0 0 16px 0'
            }}>📈 Viral Impact</h3>
            <ul style={{
              listStyle: 'none',
              marginTop: '12px',
              padding: '0',
              margin: '0'
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '12px'
              }}>
                <span style={{
                  fontSize: '1.875rem',
                  marginRight: '12px'
                }}>🎵</span>
                <span style={{ color: '#374151' }}>Millions of TikTok videos</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '12px'
              }}>
                <span style={{
                  fontSize: '1.875rem',
                  marginRight: '12px'
                }}>🌍</span>
                <span style={{ color: '#374151' }}>Global phenomenon</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '12px'
              }}>
                <span style={{
                  fontSize: '1.875rem',
                  marginRight: '12px'
                }}>😂</span>
                <span style={{ color: '#374151' }}>Endless memes & remixes</span>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#3b82f6',
              margin: '0 0 16px 0'
            }}>👥 Community</h3>
            <p style={{
              color: '#374151',
              lineHeight: '1.6',
              margin: '0'
            }}>
              Join millions of people worldwide who have embraced the joy and randomness of
              "Chupapi Munano." Whether you're creating content, sharing memes, or just enjoying
              the infectious energy, you're part of something special!
            </p>
          </div>

          {/* Interactive Element */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#f97316',
              margin: '0 0 16px 0'
            }}>🎮 Try It Out!</h3>
            <button
              onClick={() => {
                alert('Chupapi Munano! 🎉');
              }}
              style={{
                background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '1rem'
              }}
            >
              🔊 Say It!
            </button>
            <p style={{
              color: '#374151',
              marginTop: '12px',
              fontSize: '0.875rem',
              margin: '12px 0 0 0'
            }}>Click to experience the magic!</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 20px' }}>
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '32px'
          }}>
            <h3 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>Keep the Spirit Alive!</h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              margin: '0'
            }}>
              "Chupapi Munano" reminds us that sometimes the best things in life are the unexpected,
              silly, and purely joyful moments that bring people together. Keep spreading the happiness!
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '2.5rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '24px'
          }}>
            <span>🎉</span>
            <span>🌈</span>
            <span>✨</span>
            <span>🎵</span>
            <span>😄</span>
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            margin: '0'
          }}>Made with ❤️ for the Chupapi Munano community</p>
        </div>
      </footer>
    </div>
  );
}