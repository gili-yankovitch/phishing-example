import React, { useState } from 'react';

// Icons components to replace lucide-react
const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CreditCardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
    <path d="M6 15H10" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" />
    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const FileTextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" />
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
    <path d="M8 13H16" stroke="currentColor" strokeWidth="2" />
    <path d="M8 17H16" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" />
    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Add tooltip icon component
const TooltipIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#94a3b8" strokeWidth="2" />
    <path d="M12 16V12" stroke="#94a3b8" strokeWidth="2" />
    <path d="M12 8H12.01" stroke="#94a3b8" strokeWidth="2" />
  </svg>
);

const UbertPhishingDemo = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Add new state for checkboxes
  const [rememberCard, setRememberCard] = useState(false);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  // Add state for tooltips
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
      padding: '16px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
      }}>
        <div style={{
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          backgroundColor: 'white',
          border: 'none'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(to right, #000000, #000000)',
            padding: '16px 24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  padding: '4px',
                  marginRight: '8px'
                }}>
                  {/* Changed coffee mug icon to car icon */}
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 17h14v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2zm12-6h2a2 2 0 0 1 2 2v3h-4v-5zm-10 0H5a2 2 0 0 0-2 2v3h4v-5zm0-3h10l2 5H3l2-5z" />
                    <circle cx="7" cy="18" r="1" />
                    <circle cx="17" cy="18" r="1" />
                  </svg>
                </div>
                <span style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}>Uber</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '4px 12px',
                borderRadius: '9999px'
              }}>
                <div style={{ color: 'white' }}><LockIcon /></div>
                <span style={{ color: 'white', fontSize: '12px', fontWeight: '500' }}>Secure</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '24px' }}>
            {/* Outstanding Payment Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px'
            }}>
              <div style={{
                background: '#fff7ed',
                padding: '8px',
                borderRadius: '9999px',
                color: '#f97316'
              }}>
                <AlertCircleIcon />
              </div>
              <div>
                <h1 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  margin: '0'
                }}>Outstanding Payment</h1>
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  margin: '4px 0 0 0'
                }}>
                  You have an outstanding fee of <span style={{ fontWeight: 'bold', color: '#1e293b' }}>$15.89</span>
                </p>
              </div>
            </div>

            {/* Security Block */}
            <div style={{
              background: '#eff6ff',
              border: '1px solid #dbeafe',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ marginRight: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '9999px',
                    background: '#dbeafe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2563eb'
                  }}>
                    <LockIcon />
                  </div>
                </div>
                <div>
                  <h3 style={{
                    fontWeight: '500',
                    color: '#1e40af',
                    margin: '0',
                    fontSize: '15px'
                  }}>Verified by Visa, Mastercard SecureCode, PCI DSS Compliant</h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#3b82f6',
                    margin: '4px 0 0 0'
                  }}>
                    Your payment information is encrypted and securely processed
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div style={{ marginBottom: '24px' }}>
              {/* Card Number */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#475569',
                  marginBottom: '4px'
                }}>
                  <span style={{ marginRight: '6px', color: '#64748b' }}><CreditCardIcon /></span>
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px',
                    background: '#f8fafc',
                    outline: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxSizing: 'border-box'
                  }}
                  maxLength={19}
                />
              </div>

              {/* Two Column Layout */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '20px'
              }}>
                {/* Expiration Date */}
                <div>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#475569',
                    marginBottom: '4px'
                  }}>
                    <span style={{ marginRight: '6px', color: '#64748b' }}><CalendarIcon /></span>
                    Expiration Date
                    <span
                      style={{ marginLeft: '4px', cursor: 'pointer' }}
                      onMouseEnter={() => setActiveTooltip('expiration')}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <TooltipIcon />
                      {activeTooltip === 'expiration' && (
                        <div style={{
                          position: 'absolute',
                          background: '#334155',
                          color: 'white',
                          padding: '8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          maxWidth: '200px',
                          zIndex: 10,
                          marginTop: '4px'
                        }}>
                          The expiration date on your card (MM/YY format)
                        </div>
                      )}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiration}
                    onChange={(e) => setExpiration(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: '#f8fafc',
                      outline: 'none',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      boxSizing: 'border-box'
                    }}
                    maxLength={5}
                  />
                </div>

                {/* CVV */}
                <div>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#475569',
                    marginBottom: '4px'
                  }}>
                    <span style={{ marginRight: '6px', color: '#64748b' }}><FileTextIcon /></span>
                    CVV
                    <span
                      style={{ marginLeft: '4px', cursor: 'pointer' }}
                      onMouseEnter={() => setActiveTooltip('cvv')}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <TooltipIcon />
                      {activeTooltip === 'cvv' && (
                        <div style={{
                          position: 'absolute',
                          background: '#334155',
                          color: 'white',
                          padding: '8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          maxWidth: '200px',
                          zIndex: 10,
                          marginTop: '4px'
                        }}>
                          The 3 or 4 digit security code on the back of your card
                        </div>
                      )}
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: '#f8fafc',
                      outline: 'none',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      boxSizing: 'border-box'
                    }}
                    maxLength={4}
                  />
                </div>
              </div>

              {/* ZIP Code */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#475569',
                  marginBottom: '4px'
                }}>
                  <span style={{ marginRight: '6px', color: '#64748b' }}><MapPinIcon /></span>
                  Billing ZIP Code
                  <span
                    style={{ marginLeft: '4px', cursor: 'pointer' }}
                    onMouseEnter={() => setActiveTooltip('zip')}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <TooltipIcon />
                    {activeTooltip === 'zip' && (
                      <div style={{
                        position: 'absolute',
                        background: '#334155',
                        color: 'white',
                        padding: '8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        maxWidth: '200px',
                        zIndex: 10,
                        marginTop: '4px'
                      }}>
                        The postal code associated with your billing address
                      </div>
                    )}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="90210"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px',
                    background: '#f8fafc',
                    outline: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxSizing: 'border-box'
                  }}
                  maxLength={10}
                />
              </div>

              {/* Remember Card Checkbox */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '13px',
                  color: '#475569',
                  cursor: 'pointer'
                }}>
                  <input
                    type="checkbox"
                    checked={rememberCard}
                    onChange={() => setRememberCard(!rememberCard)}
                    style={{
                      marginRight: '8px',
                      cursor: 'pointer'
                    }}
                  />
                  Remember this card for future payments
                </label>
              </div>

              {/* Promo Code Option */}
              <div style={{ marginBottom: '20px' }}>
                <div
                  onClick={() => setShowPromoCode(!showPromoCode)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '13px',
                    color: '#3b82f6',
                    fontWeight: '500',
                    cursor: 'pointer',
                    marginBottom: showPromoCode ? '10px' : '0'
                  }}
                >
                  {showPromoCode ? '- Hide promo code' : '+ Add promo code'}
                </div>

                {showPromoCode && (
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: '#f8fafc',
                      outline: 'none',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      boxSizing: 'border-box'
                    }}
                  />
                )}
              </div>

              {/* Submit Button with flatter style */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: isLoading ? '#93c5fd' : '#000000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px', // Reduced border radius for flatter look
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: isLoading ? 'default' : 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'background-color 0.2s',
                  boxShadow: 'none', // Removed shadow for flatter look
                  textTransform: 'uppercase', // Added for flatter, more modern look
                  letterSpacing: '0.5px' // Added for flatter, more modern look
                }}
              >
                {isLoading ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                      animation: 'spin 1s linear infinite',
                      marginRight: '8px',
                      marginLeft: '-4px'
                    }}>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
                      <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" />
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Complete Payment • $15.89'
                )}
              </button>
            </div>

            {/* Payment Methods */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '24px'
            }}>
              <div style={{
                background: '#f8fafc',
                borderRadius: '8px',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {/* Visa */}
                  <svg viewBox="0 0 38 24" width="32" height="20">
                    <rect width="38" height="24" fill="#2566AF" rx="3" />
                    <path fill="#FFFFFF" d="M15.4 14.8l1.2-7.3h1.9l-1.2 7.3H15.4z" />
                    <path fill="#FFFFFF" d="M22.8 7.7c-.4-.1-.9-.3-1.6-.3-1.8 0-3 .9-3 2.2 0 1 .9 1.5 1.6 1.8.7.3 1 .5 1 .8 0 .4-.6.6-1.1.6-.7 0-1.1-.1-1.7-.4l-.2-.1-.3 1.6c.5.2 1.3.4 2.2.4 2 0 3.3-.9 3.3-2.3 0-.8-.5-1.4-1.5-1.8-.6-.3-1-.5-1-.8 0-.3.3-.5.9-.5.5 0 .9.1 1.2.2l.1.1.3-1.5z" />
                    <path fill="#FFFFFF" d="M24.8 12c.2-.5.9-2.4.9-2.4s.2-.5.3-.8l.2.7s.4 1.9.5 2.5h-1.9zm2.9-4.5h-1.5c-.4 0-.8.1-1 .6l-2.7 6.2h1.9l.4-.9h2.4c.1.3.2.9.2.9h1.7l-1.4-6.8z" />
                    <path fill="#FFFFFF" d="M11.8 7.5L10 12.2l-.2-1c-.4-1.2-1.5-2.5-2.6-3.1l1.7 6.7h2l3-7.2h-2.1z" />
                    <path fill="#FFFFFF" d="M8.8 7.5H5.5l-.1.3c2.3.5 3.9 1.9 4.5 3.4l-.6-3c-.1-.5-.5-.7-.9-.7z" />
                  </svg>

                  {/* Mastercard */}
                  <svg viewBox="0 0 38 24" width="32" height="20">
                    <rect width="38" height="24" fill="#FF5F00" rx="3" />
                    <circle cx="13" cy="12" r="7" fill="#EB001B" />
                    <circle cx="25" cy="12" r="7" fill="#F79E1B" />
                    <path fill="#FF5F00" d="M19 5v14" />
                    <path fill="#FFFFFF" d="M19 19c-3.3 0-6.1-2.7-6.1-6s2.7-6 6.1-6c3.3 0 6.1 2.7 6.1 6s-2.7 6-6.1 6z" />
                  </svg>

                  {/* Amex */}
                  <svg viewBox="0 0 38 24" width="32" height="20">
                    <rect width="38" height="24" fill="#016FD0" rx="3" />
                    <path fill="#FFFFFF" d="M20.2 12.5H18V8.7h2.2v3.8z" />
                    <path fill="#016FD0" d="M20.2 8.7l-2.2 3.8V5h2.2v3.7z" />
                    <path fill="#FFFFFF" d="M33 8.7h-2.4l-1.6 3.8h2.2l.2-1h1.4l.2 1h2.2L33 8.7zm-1.2 2.1l.4-1.1.4 1.1h-.8z" />
                    <path fill="#FFFFFF" d="M25.7 12.5h2.2l-1.8-3.8h-2.4l-1.8 3.8h2.2l.3-1h1.8l.3 1zm-1.1-2.1l.4-1.1.4 1.1h-.8z" />
                    <path fill="#FFFFFF" d="M12.4 12.5h2.2V8.7h-2.2v3.8z" />
                    <path fill="#016FD0" d="M12.4 8.7l-2.2 3.8V5h2.2v3.7z" />
                    <path fill="#FFFFFF" d="M8.7 11.4c-.3.8-1 1.3-1.9 1.3-1.1 0-2-.9-2-2s.9-2 2-2c.9 0 1.6.6 1.9 1.3h2.3C10.5 8 8.9 6.7 7 6.7c-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 1.9 0 3.5-1.3 4-3.1H8.7v.2z" />
                    <path fill="#FFFFFF" d="M15.5 10.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" />
                    <path fill="#FFFFFF" d="M28.5 10.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" />
                  </svg>
                </div>

                <div style={{
                  height: '24px',
                  width: '1px',
                  background: '#cbd5e1',
                  margin: '0 4px'
                }}></div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', marginRight: '4px' }}><LockIcon /></span>
                  <span style={{
                    fontSize: '12px',
                    color: '#475569',
                    fontWeight: '500'
                  }}>Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p style={{
          fontSize: '12px',
          color: '#94a3b8',
          textAlign: 'center',
          marginTop: '16px'
        }}>
          © 2025 Uber Technologies Inc. All rights reserved By completing this payment, you agree to Ubert's <span style={{ color: '#64748b', textDecoration: 'underline', cursor: 'pointer' }}>Terms of Service</span> and <span style={{ color: '#64748b', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>.
        </p>
      </div>

      {/* CSS animation for spinner */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default UbertPhishingDemo;
