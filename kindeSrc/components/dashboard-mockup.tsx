import React from 'react';

const DashboardMockup: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '1.25rem', // Softer corners
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Cleaner shadow
      padding: '1.5rem',
      width: '100%',
      overflow: 'hidden',
      border: '1px solid rgba(241, 245, 249, 1)', // Subtle border
      userSelect: 'none',
      pointerEvents: 'none',
      transform: 'scale(0.9)', // Slightly smaller for fit
      transformOrigin: 'center'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        gap: '1.25rem' // Increased gap
      }}>
        
        {/* Top Widgets */}
        {[
          { label: 'Total Sales', value: '$189,374', trend: '7%', positive: true, icon: 'chart' },
          { label: 'Chat Performance', value: '00:01:30', graph: true },
          { label: 'Total Profit', value: '$25,684', trend: '5%', positive: true, icon: 'dollar' }
        ].map((widget, i) => (
          <div key={i} style={{
            gridColumn: 'span 4',
            backgroundColor: 'white',
            padding: '1.25rem',
            borderRadius: '1rem',
            border: '1px solid rgb(241 245 249)',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{widget.label}</p>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'rgb(15 23 42)', lineHeight: '1' }}>{widget.value}</h3>
              </div>
              <div style={{ padding: '0.5rem', backgroundColor: 'rgb(248 250 252)', borderRadius: '0.5rem' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: 'rgb(148 163 184)', borderRadius: '50%', boxShadow: '6px 0 0 rgb(148 163 184), -6px 0 0 rgb(148 163 184)' }}></div>
              </div>
            </div>
            
            {widget.graph ? (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '32px', marginTop: '0.5rem' }}>
                 {[40, 70, 45, 90, 50, 80, 60].map((h, idx) => (
                   <div key={idx} style={{ flex: 1, height: `${h}%`, backgroundColor: 'rgb(59 130 246)', borderRadius: '4px', opacity: idx % 2 ? 0.7 : 1 }}></div>
                 ))}
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', fontSize: '11px', fontWeight: 600, color: 'rgb(22 163 74)', backgroundColor: 'rgb(220 252 231)', padding: '2px 8px', borderRadius: '9999px' }}>
                  +{widget.trend}
                </span>
                <span style={{ fontSize: '11px', color: 'rgb(148 163 184)', fontWeight: 500 }}>vs last month</span>
              </div>
            )}
          </div>
        ))}

        {/* Middle Section: Main Charts */}
        <div style={{
          gridColumn: 'span 8',
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid rgb(241 245 249)',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
          minHeight: '200px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'rgb(15 23 42)', margin: 0 }}>Sales Overview</h4>
            <div style={{ fontSize: '11px', padding: '0.25rem 0.75rem', backgroundColor: 'rgb(248 250 252)', borderRadius: '0.375rem', border: '1px solid rgb(226 232 240)', fontWeight: 600, color: 'rgb(71 85 105)' }}>Weekly</div>
          </div>
          <div style={{ height: '10rem', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '0.75rem' }}>
            {[60, 45, 30, 75, 50, 85, 65].map((h, i) => (
              <div key={i} style={{ flex: 1, backgroundColor: 'rgb(59 130 246)', borderRadius: '0.5rem', height: `${h}%`, transition: 'height 0.5s ease', opacity: 0.9 }}></div>
            ))}
          </div>
        </div>

        <div style={{
          gridColumn: 'span 4',
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '1rem',
          border: '1px solid rgb(241 245 249)',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'rgb(15 23 42)', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Sales Categories</h4>
          <div style={{ position: 'relative', width: '140px', height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: '12px solid rgb(241 245 249)',
              borderTopColor: 'rgb(59 130 246)',
              borderRightColor: 'rgb(168 85 247)',
              transform: 'rotate(-45deg)'
            }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '10px', color: 'rgb(100 116 139)', fontWeight: 600, textTransform: 'uppercase' }}>Total Sales</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'rgb(15 23 42)' }}>6,248</div>
            </div>
          </div>
          <div style={{ width: '100%', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Smartphones', val: '3,849', color: 'rgb(59 130 246)' },
              { label: 'Laptops', val: '750', color: 'rgb(168 85 247)' },
              { label: 'Accessories', val: '1,649', color: 'rgb(241 245 249)' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: item.color }}></div>
                  <span style={{ color: 'rgb(71 85 105)' }}>{item.label}</span>
                </div>
                <span style={{ color: 'rgb(15 23 42)' }}>{item.val} Unit</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction Table */}
        <div style={{
          gridColumn: 'span 12',
          marginTop: '0.5rem'
        }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'rgb(15 23 42)', marginBottom: '1rem' }}>Recent Transactions</h4>
          <div style={{ overflow: 'hidden', borderRadius: '1rem', border: '1px solid rgb(241 245 249)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: 'rgb(248 250 252)', borderBottom: '1px solid rgb(226 232 240)' }}>
                <tr>
                  {['Order ID', 'Product Name', 'Date', 'Price', 'Status'].map((h, i) => (
                    <th key={i} style={{ padding: '1rem', fontSize: '10px', fontWeight: 700, color: 'rgb(100 116 139)', textTransform: 'uppercase', textAlign: i >= 3 ? (i === 4 ? 'center' : 'right') : 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ backgroundColor: 'white' }}>
                {[
                  { id: '#ZOP980131', name: 'Premium Plan', date: '13 Feb, 2025', price: '$449.00', status: 'Unpaid', color: 'rgb(239 68 68)', bg: 'rgb(254 242 242)' },
                  { id: '#ZOP980130', name: 'Enterprise Lic', date: '13 Feb, 2025', price: '$1,198.00', status: 'Pending', color: 'rgb(245 158 11)', bg: 'rgb(255 251 235)' },
                  { id: '#ZOP980129', name: 'Basic Sub', date: '12 Feb, 2025', price: '$99.00', status: 'Paid', color: 'rgb(34 197 94)', bg: 'rgb(240 253 244)' }
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < 2 ? '1px solid rgb(241 245 249)' : 'none' }}>
                    <td style={{ padding: '1rem', fontSize: '12px', fontWeight: 600, color: 'rgb(15 23 42)' }}>{row.id}</td>
                    <td style={{ padding: '1rem', fontSize: '12px', color: 'rgb(51 65 85)' }}>{row.name}</td>
                    <td style={{ padding: '1rem', fontSize: '12px', color: 'rgb(100 116 139)' }}>{row.date}</td>
                    <td style={{ padding: '1rem', fontSize: '12px', fontWeight: 600, color: 'rgb(15 23 42)', textAlign: 'right' }}>{row.price}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, color: row.color, backgroundColor: row.bg, padding: '0.25rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase' }}>{row.status}</span>
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