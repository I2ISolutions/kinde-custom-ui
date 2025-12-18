import React from "react";

// Icons for the stepper
const Icons = {
  User: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  Profile: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <line x1="20" y1="8" x2="20" y2="14"></line>
      <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
  ),
  Laptop: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="2" y1="21" x2="22" y2="21"></line>
    </svg>
  ),
  Server: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  ),
  Academy: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  ),
  Card: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  ),
  Check: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
};

const MarketingPanel: React.FC = () => {
  const steps = [
    {
      id: "01",
      label: "Offer Signed",
      sub: "HRMS",
      icon: <Icons.User />,
      completed: true
    },
    {
      id: "02",
      label: "Profile Created",
      sub: "HRMS",
      icon: <Icons.Profile />,
      completed: true
    },
    {
      id: "03",
      label: "Laptop Prov.",
      sub: "ITSM",
      icon: <Icons.Laptop />,
      completed: true
    },
    {
      id: "04",
      label: "SSO Access",
      sub: "ITSM",
      icon: <Icons.Server />,
      completed: true
    },
    {
      id: "05",
      label: "LMS Enrollment",
      sub: "Academy",
      icon: <Icons.Academy />,
      completed: true
    },
    {
      id: "06",
      label: "Payroll Setup",
      sub: "Finance",
      icon: <Icons.Card />,
      active: true
    }
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem",
        overflow: "hidden",
        position: "relative",
        background: "#0f172a", // Slate 900
        boxSizing: "border-box",
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Background Grid */}
      <div 
        style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.3,
            pointerEvents: 'none',
        }}
      />

      <div style={{
          width: "100%",
          maxWidth: "1100px",
          background: "white",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 10,
      }}>
          {/* Header */}
          <div style={{
              padding: "1.5rem 2rem",
              borderBottom: "1px solid #e2e8f0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
          }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #4f46e5, #6366f1)" }} />
                  <div>
                      <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: "#1e293b" }}>Zopkit Automation Hub</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
                          <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 500 }}>System Active</span>
                      </div>
                  </div>
              </div>
              
              <div style={{
                  background: "#f1f5f9",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  color: "#64748b",
                  fontWeight: 600
              }}>
                  v3.1
              </div>
          </div>

          {/* Main Content */}
          <div style={{ padding: "3rem 2rem", display: "flex", gap: "2rem" }}>
              {/* Sidebar Menu Mockup */}
              <div style={{ width: "240px", flexShrink: 0, borderRight: "1px solid #e2e8f0", paddingRight: "2rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                      <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1e293b", margin: "0 0 0.5rem 0" }}>Lead to Cash</h4>
                      <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>Automate your revenue cycle from prospect to payment.</p>
                  </div>
                  <div style={{ 
                      padding: "1rem", 
                      background: "#f8fafc", 
                      borderRadius: "8px", 
                      borderLeft: "4px solid #a855f7",
                      marginBottom: "2rem"
                  }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                          <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1e293b", margin: 0 }}>Hire to Retire</h4>
                          <span style={{ color: "#a855f7" }}>⚡</span>
                      </div>
                      <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>Streamline the entire employee lifecycle.</p>
                  </div>
                  <div>
                      <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#94a3b8", margin: "0 0 0.5rem 0" }}>Procure to Pay</h4>
                      <p style={{ fontSize: "0.75rem", color: "#94a3b8", margin: 0, lineHeight: 1.5 }}>Optimize supply chain and vendor payments.</p>
                  </div>
              </div>

              {/* Workflow Stepper */}
              <div style={{ flex: 1, paddingTop: "1rem" }}>
                  <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between",
                      marginBottom: "4rem",
                      position: "relative"
                  }}>
                      {/* Connecting Line background */}
                      <div style={{
                          position: "absolute",
                          top: "28px",
                          left: "20px",
                          right: "20px",
                          height: "4px",
                          background: "#e2e8f0",
                          zIndex: 0
                      }} />

                      {/* Active Line Progress - mock ~85% */}
                      <div style={{
                          position: "absolute",
                          top: "28px",
                          left: "20px",
                          width: "85%",
                          height: "4px",
                          background: "#a855f7",
                          zIndex: 0
                      }} />

                      {steps.map((step, index) => (
                          <div key={index} style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                              {/* Circle */}
                              <div style={{
                                  width: step.active ? "64px" : "56px",
                                  height: step.active ? "64px" : "56px",
                                  borderRadius: "50%",
                                  background: step.active ? "white" : "#a855f7",
                                  border: step.active ? "4px solid #a855f7" : "none",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: step.active ? "#1e293b" : "white",
                                  marginBottom: "1rem",
                                  boxShadow: step.active ? "0 10px 15px -3px rgba(168, 85, 247, 0.3)" : "none",
                                  transition: "all 0.3s ease",
                                  position: "relative" // For checkmark
                              }}>
                                  {step.icon}
                                  
                                  {/* Checkmark badge */}
                                  {step.completed && (
                                      <div style={{
                                          position: "absolute",
                                          bottom: "0",
                                          right: "-4px",
                                          width: "20px",
                                          height: "20px",
                                          background: "white",
                                          borderRadius: "50%",
                                          border: "2px solid #10b981",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          color: "#10b981"
                                      }}>
                                          <Icons.Check />
                                      </div>
                                  )}
                              </div>

                              {/* Labels */}
                              <div style={{ textAlign: "center" }}>
                                  <div style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#94a3b8", marginBottom: "0.25rem" }}>
                                      STEP {step.id}
                                  </div>
                                  <div style={{ fontSize: step.active ? "0.875rem" : "0.8rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.25rem", whiteSpace: "nowrap" }}>
                                      {step.label}
                                  </div>
                                  <div style={{ 
                                      fontSize: "0.65rem", 
                                      fontWeight: 600, 
                                      color: "#64748b",
                                      background: "#f1f5f9",
                                      padding: "2px 8px",
                                      borderRadius: "9999px",
                                      display: "inline-block"
                                  }}>
                                      {step.sub}
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* Logs Section */}
                  <div style={{ 
                      marginTop: "2rem", 
                      borderTop: "1px solid #e2e8f0", 
                      paddingTop: "1.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end"
                  }}>
                      <div style={{ flex: 1 }}>
                          <h5 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#334155", display: "flex", alignItems: "center", gap: "0.5rem", margin: "0 0 1rem 0" }}>
                              <span style={{ color: "#a855f7" }}>⚡</span> Live System Activity
                          </h5>
                          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.7rem", color: "#64748b", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                              <div style={{ display: "flex", gap: "1rem" }}>
                                  <span style={{ color: "#94a3b8" }}>16</span>
                                  <span>[00:32:14] STARTED: Payroll Setup (Finance)</span>
                              </div>
                              <div style={{ display: "flex", gap: "1rem" }}>
                                  <span style={{ color: "#94a3b8" }}>17</span>
                                  <span>&gt; [00:32:14] ACTION: Configuring tax & salary...</span>
                              </div>
                              <div style={{ display: "flex", gap: "1rem", color: "#10b981" }}>
                                  <span style={{ color: "#94a3b8" }}>18</span>
                                  <span>✓ [00:32:14] COMPLETED: Status 'Ready' verified.</span>
                              </div>
                          </div>
                      </div>
                      
                      <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>Avg. Process Time</div>
                          <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b", display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "flex-end" }}>
                              1.2s
                              <span style={{ fontSize: "0.75rem", background: "#dbeafe", color: "#2563eb", padding: "2px 6px", borderRadius: "4px" }}>-15%</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MarketingPanel;
