import React from 'react';

const DashboardMockup: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
      padding: '1.25rem',
      width: '100%',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.2)',
      userSelect: 'none',
      pointerEvents: 'none',
      transform: 'scale(0.85)',
      transformOrigin: 'center'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        gap: '1rem'
      }}>
        
        {/* Top Widgets */}
        <div style={{
          gridColumn: 'span 4',
          backgroundColor: 'rgb(248 250 252)',
          padding: '1rem',
          borderRadius: '0.75rem',
          border: '1px solid rgb(241 245 249)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1rem'
          }}>
            <div>
              <p style={{
                fontSize: '10px',
                fontWeight: 700,
                color: 'rgb(148 163 184)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: 0
              }}>Total Sales</p>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'rgb(30 41 59)',
                margin: 0,
                marginTop: '0.25rem'
              }}>$189,374</h3>
            </div>
            <div style={{
              padding: '0.375rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
              border: '1px solid rgb(241 245 249)'
            }}>
              <svg style={{ width: '14px', height: '14px', color: 'rgb(148 163 184)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem'
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '10px',
              fontWeight: 700,
              color: 'rgb(16 185 129)',
              backgroundColor: 'rgb(236 253 245)',
              padding: '0.125rem 0.5rem',
              borderRadius: '9999px'
            }}>
              <svg style={{ width: '10px', height: '10px', marginRight: '0.125rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              7%
            </span>
            <span style={{
              fontSize: '10px',
              fontWeight: 500,
              color: 'rgb(148 163 184)'
            }}>From last month</span>
          </div>
        </div>

        <div style={{
          gridColumn: 'span 4',
          backgroundColor: 'rgb(248 250 252)',
          padding: '1rem',
          borderRadius: '0.75rem',
          border: '1px solid rgb(241 245 249)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1rem'
          }}>
            <div>
              <p style={{
                fontSize: '10px',
                fontWeight: 700,
                color: 'rgb(148 163 184)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: 0
              }}>Chat Performance</p>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'rgb(30 41 59)',
                margin: 0,
                marginTop: '0.25rem'
              }}>00:01:30</h3>
            </div>
            <div style={{
              padding: '0.375rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
              border: '1px solid rgb(241 245 249)'
            }}>
              <svg style={{ width: '14px', height: '14px', color: 'rgb(148 163 184)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
          </div>
          <div style={{
            height: '3rem',
            width: '100%',
            background: 'linear-gradient(to top, rgb(219 234 254), rgb(239 246 255))',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '0 0.5rem',
            paddingBottom: '0.25rem'
          }}>
            <div style={{ width: '8px', height: '24px', backgroundColor: 'rgb(96 165 250)', borderRadius: '0.25rem 0.25rem 0 0' }}></div>
            <div style={{ width: '8px', height: '32px', backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0' }}></div>
            <div style={{ width: '8px', height: '20px', backgroundColor: 'rgb(96 165 250)', borderRadius: '0.25rem 0.25rem 0 0' }}></div>
            <div style={{ width: '8px', height: '28px', backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0' }}></div>
            <div style={{ width: '8px', height: '16px', backgroundColor: 'rgb(96 165 250)', borderRadius: '0.25rem 0.25rem 0 0' }}></div>
            <div style={{ width: '8px', height: '24px', backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0' }}></div>
            <div style={{ width: '8px', height: '20px', backgroundColor: 'rgb(96 165 250)', borderRadius: '0.25rem 0.25rem 0 0' }}></div>
          </div>
        </div>

        <div style={{
          gridColumn: 'span 4',
          backgroundColor: 'rgb(248 250 252)',
          padding: '1rem',
          borderRadius: '0.75rem',
          border: '1px solid rgb(241 245 249)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1rem'
          }}>
            <div>
              <p style={{
                fontSize: '10px',
                fontWeight: 700,
                color: 'rgb(148 163 184)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: 0
              }}>Total Profit</p>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'rgb(30 41 59)',
                margin: 0,
                marginTop: '0.25rem'
              }}>$25,684</h3>
            </div>
            <div style={{
              padding: '0.375rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
              border: '1px solid rgb(241 245 249)'
            }}>
              <svg style={{ width: '14px', height: '14px', color: 'rgb(148 163 184)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem'
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '10px',
              fontWeight: 700,
              color: 'rgb(16 185 129)',
              backgroundColor: 'rgb(236 253 245)',
              padding: '0.125rem 0.5rem',
              borderRadius: '9999px'
            }}>
              <svg style={{ width: '10px', height: '10px', marginRight: '0.125rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              5%
            </span>
            <span style={{
              fontSize: '10px',
              fontWeight: 500,
              color: 'rgb(148 163 184)'
            }}>From last month</span>
          </div>
        </div>

        {/* Middle Section: Main Charts */}
        <div style={{
          gridColumn: 'span 8',
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '0.75rem',
          border: '1px solid rgb(241 245 249)',
          minHeight: '160px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'rgb(30 41 59)',
              margin: 0
            }}>Sales Overview</h4>
            <div style={{
              fontSize: '10px',
              padding: '0.25rem 0.5rem',
              backgroundColor: 'rgb(248 250 252)',
              borderRadius: '0.25rem',
              border: '1px solid rgb(226 232 240)',
              fontWeight: 600,
              color: 'rgb(100 116 139)'
            }}>Weekly</div>
          </div>
          <div style={{
            height: '8rem',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '0.25rem'
          }}>
            <div style={{ flex: 1, backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0', height: '60%' }}></div>
            <div style={{ flex: 1, backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0', height: '45%' }}></div>
            <div style={{ flex: 1, backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0', height: '30%' }}></div>
            <div style={{ flex: 1, backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0', height: '55%' }}></div>
            <div style={{ flex: 1, backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0', height: '25%' }}></div>
            <div style={{ flex: 1, backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0', height: '40%' }}></div>
            <div style={{ flex: 1, backgroundColor: 'rgb(59 130 246)', borderRadius: '0.25rem 0.25rem 0 0', height: '35%' }}></div>
          </div>
        </div>

        <div style={{
          gridColumn: 'span 4',
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '0.75rem',
          border: '1px solid rgb(241 245 249)',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}>
            <h4 style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'rgb(30 41 59)',
              margin: 0
            }}>Sales Categories</h4>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              height: '8rem',
              width: '8rem',
              borderRadius: '50%',
              border: '8px solid rgb(59 130 246)',
              borderTopColor: 'rgb(99 102 241)',
              borderRightColor: 'rgb(168 85 247)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '1.5rem'
              }}>
                <span style={{
                  fontSize: '8px',
                  fontWeight: 700,
                  color: 'rgb(148 163 184)'
                }}>Total Sales</span>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'rgb(30 41 59)'
                }}>6,248 Units</span>
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.375rem',
            marginTop: '0.5rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '8px',
              fontWeight: 700
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(99 102 241)'
                }}></div>
                <span style={{ color: 'rgb(100 116 139)' }}>Smartphones</span>
              </div>
              <span style={{ color: 'rgb(51 65 85)' }}>3,849 Unit</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '8px',
              fontWeight: 700
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(168 85 247)'
                }}></div>
                <span style={{ color: 'rgb(100 116 139)' }}>Laptops</span>
              </div>
              <span style={{ color: 'rgb(51 65 85)' }}>750 Unit</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '8px',
              fontWeight: 700
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(147 197 253)'
                }}></div>
                <span style={{ color: 'rgb(100 116 139)' }}>Accessories</span>
              </div>
              <span style={{ color: 'rgb(51 65 85)' }}>1,649 Unit</span>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div style={{
          gridColumn: 'span 12',
          marginTop: '0.5rem'
        }}>
          <h4 style={{
            fontSize: '0.875rem',
            fontWeight: 700,
            color: 'rgb(30 41 59)',
            marginBottom: '1rem',
            margin: 0,
            marginBottom: '1rem'
          }}>Product Transaction</h4>
          <div style={{
            overflow: 'hidden',
            borderRadius: '0.5rem',
            border: '1px solid rgb(241 245 249)',
            backgroundColor: 'rgba(248 250 252, 0.5)'
          }}>
            <table style={{
              width: '100%',
              textAlign: 'left',
              borderCollapse: 'collapse'
            }}>
              <thead style={{
                fontSize: '9px',
                fontWeight: 700,
                color: 'rgb(148 163 184)',
                textTransform: 'uppercase',
                backgroundColor: 'rgb(248 250 252)',
                borderBottom: '1px solid rgb(241 245 249)'
              }}>
                <tr>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Order ID</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Product Name</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Date</th>
                  <th style={{ padding: '0.5rem 0.75rem', textAlign: 'right' }}>Price</th>
                  <th style={{ padding: '0.5rem 0.75rem', textAlign: 'center' }}>Status</th>
                </tr>
              </thead>
              <tbody style={{
                fontSize: '9px',
                fontWeight: 500,
                color: 'rgb(71 85 105)'
              }}>
                {[
                  { id: '#ZOP980131-9N', name: 'Premium Plan', date: '13 Feb, 2025', price: '$449', status: 'Unpaid', statusColor: 'rgb(244 63 94)', statusBg: 'rgb(255 241 242)' },
                  { id: '#ZOP980130-8N', name: 'Enterprise License', date: '13 Feb, 2025', price: '$1,198', status: 'Pending', statusColor: 'rgb(245 158 11)', statusBg: 'rgb(255 251 235)' },
                  { id: '#ZOP980129-7N', name: 'Basic Subscription', date: '13 Feb, 2025', price: '$999', status: 'Paid', statusColor: 'rgb(16 185 129)', statusBg: 'rgb(236 253 245)' },
                ].map((row, idx) => (
                  <tr key={idx} style={{
                    backgroundColor: 'white',
                    borderBottom: idx < 2 ? '1px solid rgb(241 245 249)' : 'none'
                  }}>
                    <td style={{
                      padding: '0.5rem 0.75rem',
                      fontWeight: 700,
                      color: 'rgb(30 41 59)'
                    }}>{row.id}</td>
                    <td style={{
                      padding: '0.5rem 0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '0.25rem',
                        backgroundColor: 'rgb(241 245 249)'
                      }}></div>
                      {row.name}
                    </td>
                    <td style={{ padding: '0.5rem 0.75rem' }}>{row.date}</td>
                    <td style={{
                      padding: '0.5rem 0.75rem',
                      textAlign: 'right',
                      fontWeight: 700
                    }}>${row.price}</td>
                    <td style={{
                      padding: '0.5rem 0.75rem',
                      textAlign: 'center'
                    }}>
                      <span style={{
                        padding: '0.125rem 0.5rem',
                        borderRadius: '9999px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '7px',
                        color: row.statusColor,
                        backgroundColor: row.statusBg
                      }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;