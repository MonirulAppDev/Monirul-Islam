export function PhoneMockup({ type }: { type: "booking" | "flight" | "scan" }) {
  return <div className={`phone phone-${type}`} aria-label={`${type} app demo visual`}>
    <div className="phone-top"><span>9:41</span><i /></div>
    {type === "booking" && <div className="phone-content booking-ui"><p>Choose your seat</p><strong>Dhaka → Chattogram</strong><div className="route-line"><span/><span/><span/></div><div className="seats">{[1,2,3,4,5,6,7,8,9,10,11,12].map(seat => <b key={seat} className={seat === 6 || seat === 9 ? "taken" : seat === 8 ? "selected" : ""}>{seat}</b>)}</div><button>Continue · ৳ 1,250</button></div>}
    {type === "flight" && <div className="phone-content flight-ui"><small>Your next journey</small><strong>Kathmandu <em>→</em> Pokhara</strong><div className="flight-card"><span>Yeti Airlines</span><b>08:30 <em>1h</em> 09:30</b><small>From $84</small></div><div className="flight-card muted"><span>Buddha Air</span><b>11:15 <em>1h</em> 12:15</b><small>From $91</small></div><div className="flight-pill">Best fare found</div></div>}
    {type === "scan" && <div className="phone-content scan-ui"><p>Document scan</p><div className="paper"><span>INVOICE</span><i/><i/><i/><i/></div><div className="scan-bar"><span>Auto</span><b>●</b><span>Batch</span></div></div>}
  </div>;
}
