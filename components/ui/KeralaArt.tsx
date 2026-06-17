'use client'

/**
 * Kerala Art Decorative Components
 *
 * Purpose-built SVG illustrations inspired by Kerala's visual traditions:
 *   KathakaliRing    — circular medallion inspired by the Kathakali Kireetam (headdress)
 *   TheyyamFan       — semicircular fan inspired by the Theyyam kireetam
 *   NilavilakkuLamp  — Kerala traditional brass oil lamp
 *   DancerSilhouette — classical Mohiniyattam dancer silhouette
 *   KeralaBorder     — horizontal repeating motif strip for section dividers
 *
 * All components are aria-hidden decorations; adjust opacity / className at usage site.
 */

interface ArtProps {
  className?: string
  color?: string
  opacity?: number
}

/* ─────────────────────────────────────────────
   KATHAKALI RING
   Concentric medallion echoing the Kathakali
   kireetam (circular crown). Great as a large
   background watermark on the Hero or BrandStory.
───────────────────────────────────────────── */
export function KathakaliRing({
  className = '',
  color = '#c32025',
  opacity = 1,
}: ArtProps) {
  const size = 600
  const cx = 300
  const cy = 300

  // Concentric ring definitions [radius, strokeWidth]
  const rings: [number, number][] = [
    [292, 1.5],
    [268, 8],
    [240, 1.5],
    [215, 6],
    [192, 1.5],
    [168, 5],
    [142, 1.5],
    [88, 5],
    [52, 1.5],
  ]

  // 24 outer decorative dots (every 15°)
  const outerDots = Array.from({ length: 24 }, (_, i) => {
    const a = (i * 15 * Math.PI) / 180
    return { x: cx + 280 * Math.cos(a), y: cy + 280 * Math.sin(a) }
  })

  // 16 medium dots on inner track (every 22.5°)
  const midDots = Array.from({ length: 16 }, (_, i) => {
    const a = (i * 22.5 * Math.PI) / 180
    return { x: cx + 228 * Math.cos(a), y: cy + 228 * Math.sin(a) }
  })

  // 8 diamond accents at 45° (offset 22.5°)
  const diamonds = Array.from({ length: 8 }, (_, i) => {
    const a = ((i * 45 + 22.5) * Math.PI) / 180
    return { x: cx + 254 * Math.cos(a), y: cy + 254 * Math.sin(a) }
  })

  // 12 radiating lines from inner to outer inner ring (every 30°)
  const rays = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180
    return {
      x1: cx + 56 * Math.cos(a), y1: cy + 56 * Math.sin(a),
      x2: cx + 132 * Math.cos(a), y2: cy + 132 * Math.sin(a),
    }
  })

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Rings */}
      {rings.map(([r, sw], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={sw} opacity={opacity} />
      ))}

      {/* Filled center */}
      <circle cx={cx} cy={cy} r={28} fill={color} opacity={opacity * 0.3} />
      <circle cx={cx} cy={cy} r={14} fill={color} opacity={opacity * 0.5} />

      {/* Outer decorative dots */}
      {outerDots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={5} fill={color} opacity={opacity} />
      ))}

      {/* Mid dots */}
      {midDots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={3.5} fill={color} opacity={opacity * 0.75} />
      ))}

      {/* Diamond accents */}
      {diamonds.map((d, i) => (
        <polygon
          key={i}
          points={`${d.x},${d.y - 11} ${d.x + 11},${d.y} ${d.x},${d.y + 11} ${d.x - 11},${d.y}`}
          fill={color}
          opacity={opacity}
        />
      ))}

      {/* Radiating lines */}
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke={color} strokeWidth={2} opacity={opacity * 0.7} />
      ))}
    </svg>
  )
}

/* ─────────────────────────────────────────────
   THEYYAM FAN
   Semicircular fan of arcs + radiating lines,
   inspired by the tall Theyyam kireetam.
   Use as a background watermark or accent.
───────────────────────────────────────────── */
export function TheyyamFan({
  className = '',
  color = '#c32025',
  opacity = 1,
}: ArtProps) {
  const w = 600
  const h = 420
  const cx = w / 2
  const base = h * 0.88

  // Fan arc bands [rx, ry, strokeWidth]
  const arcs: [number, number, number][] = [
    [272, 240, 7],
    [238, 210, 4],
    [204, 180, 7],
    [170, 150, 4],
    [136, 120, 6],
    [102, 90, 3.5],
    [68, 58, 5],
    [36, 28, 3],
  ]

  // 13 radiating lines spanning -84° to +84°
  const rays = Array.from({ length: 13 }, (_, i) => {
    const deg = -84 + i * 14
    const a = (deg * Math.PI) / 180
    const minR = 32
    const maxR = 268
    return {
      x1: cx + minR * Math.cos(a),
      y1: base + minR * Math.sin(a),
      x2: cx + maxR * Math.cos(a),
      y2: base + maxR * Math.sin(a),
    }
  })

  // Decorative dots at endpoints of outer arc (every 20°, -80° to +80°)
  const endDots = Array.from({ length: 9 }, (_, i) => {
    const deg = -80 + i * 20
    const a = (deg * Math.PI) / 180
    return {
      x: cx + 278 * Math.cos(a),
      y: base + 246 * Math.sin(a),
    }
  })

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Arc bands */}
      {arcs.map(([rx, ry, sw], i) => (
        <path
          key={i}
          d={`M ${cx - rx} ${base} A ${rx} ${ry} 0 0 1 ${cx + rx} ${base}`}
          fill="none"
          stroke={color}
          strokeWidth={sw}
          opacity={opacity}
        />
      ))}

      {/* Radiating lines */}
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke={color} strokeWidth={1.5} opacity={opacity * 0.45} />
      ))}

      {/* Outer arc endpoint dots */}
      {endDots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={6.5} fill={color} opacity={opacity * 0.85} />
      ))}

      {/* Base center element */}
      <circle cx={cx} cy={base} r={18} fill={color} opacity={opacity} />
      <circle cx={cx} cy={base} r={9} fill="white" opacity={opacity * 0.4} />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   NILAVILAKKU LAMP
   The traditional Kerala brass oil lamp —
   an iconic auspicious symbol. Use as a
   decorative accent in the footer or headers.
───────────────────────────────────────────── */
export function NilavilakkuLamp({
  className = '',
  color = '#c32025',
  opacity = 1,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 110 260"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Flame */}
      <path d="M55 22 C59 13 61 5 55 0 C49 5 51 13 55 22" fill={color} opacity={opacity} />
      <path d="M55 22 C57 17 55 12 55 22" fill="white" opacity={opacity * 0.4} />

      {/* Top oil cup */}
      <ellipse cx="55" cy="28" rx="16" ry="5.5" fill={color} opacity={opacity} />
      <path d="M39 28 L43 42 L67 42 L71 28" fill={color} opacity={opacity} />
      <ellipse cx="55" cy="42" rx="14" ry="5" fill={color} opacity={opacity} />

      {/* Stem 1 */}
      <rect x="52" y="42" width="6" height="20" fill={color} opacity={opacity} />

      {/* Tier 2 cup */}
      <ellipse cx="55" cy="62" rx="22" ry="6.5" fill={color} opacity={opacity} />
      <path d="M33 62 L37 77 L73 77 L77 62" fill={color} opacity={opacity} />
      <ellipse cx="55" cy="77" rx="20" ry="6" fill={color} opacity={opacity} />

      {/* Stem 2 */}
      <rect x="52" y="77" width="6" height="20" fill={color} opacity={opacity} />

      {/* Tier 3 cup */}
      <ellipse cx="55" cy="97" rx="28" ry="7.5" fill={color} opacity={opacity} />
      <path d="M27 97 L31 114 L79 114 L83 97" fill={color} opacity={opacity} />
      <ellipse cx="55" cy="114" rx="26" ry="7" fill={color} opacity={opacity} />

      {/* Stem 3 */}
      <rect x="52" y="114" width="6" height="22" fill={color} opacity={opacity} />

      {/* Main base plate */}
      <ellipse cx="55" cy="136" rx="36" ry="9" fill={color} opacity={opacity} />
      <path d="M19 136 L15 154 L95 154 L91 136" fill={color} opacity={opacity} />
      <ellipse cx="55" cy="154" rx="40" ry="8.5" fill={color} opacity={opacity} />

      {/* Wide base ring */}
      <rect x="13" y="154" width="84" height="12" rx="2" fill={color} opacity={opacity} />
      <ellipse cx="55" cy="168" rx="46" ry="7" fill={color} opacity={opacity} />

      {/* Ground base */}
      <rect x="9" y="168" width="92" height="7" fill={color} opacity={opacity} />
      <ellipse cx="55" cy="177" rx="52" ry="5" fill={color} opacity={opacity} />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   DANCER SILHOUETTE
   Simplified Mohiniyattam classical dancer —
   one arm raised in mudra, wide costume skirt.
   Pass flip={true} to mirror for paired use.
───────────────────────────────────────────── */
export function DancerSilhouette({
  className = '',
  color = '#c32025',
  opacity = 1,
  flip = false,
}: ArtProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 185 300"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      {/* Head */}
      <ellipse cx="90" cy="42" rx="19" ry="21" fill={color} opacity={opacity} />
      {/* Hair ornament */}
      <circle cx="103" cy="28" r="10" fill={color} opacity={opacity} />
      <circle cx="111" cy="21" r="7" fill={color} opacity={opacity} />
      <circle cx="116" cy="15" r="4.5" fill={color} opacity={opacity} />

      {/* Neck */}
      <rect x="83" y="61" width="14" height="15" fill={color} opacity={opacity} />

      {/* Right arm — raised diagonally up-right */}
      <path d="M98 75 L138 40 L144 47 L104 83 Z" fill={color} opacity={opacity} />
      {/* Right forearm continues up */}
      <path d="M138 40 L162 18 L167 24 L144 47 Z" fill={color} opacity={opacity} />
      {/* Right hand mudra */}
      <path d="M162 18 L172 8 L176 14 L170 24 L167 24 Z" fill={color} opacity={opacity} />

      {/* Left arm — extended out-left at slight downward angle */}
      <path d="M82 78 L44 94 L42 87 L80 71 Z" fill={color} opacity={opacity} />
      {/* Left forearm */}
      <path d="M44 94 L18 103 L16 96 L42 87 Z" fill={color} opacity={opacity} />
      {/* Left hand */}
      <path d="M18 103 L6 101 L6 110 L16 110 Z" fill={color} opacity={opacity} />

      {/* Torso */}
      <path d="M82 74 C79 96 79 112 82 130 L98 130 C101 112 101 96 98 74 Z" fill={color} opacity={opacity} />

      {/* Waist ornament / belt */}
      <path d="M78 127 L102 127 L104 135 L76 135 Z" fill={color} opacity={opacity} />

      {/* Large skirt — the dominant visual element */}
      <path
        d="
          M 80 133
          C 62 142, 30 163, 17 198
          C 9 222, 15 252, 38 264
          C 57 274, 82 272, 104 267
          C 126 262, 152 253, 164 238
          C 175 224, 174 205, 163 190
          C 150 173, 130 157, 110 147
          C 104 143, 100 139, 98 133
          Z
        "
        fill={color}
        opacity={opacity}
      />

      {/* Skirt fringe lines — suggest layered costume frill */}
      {[200, 215, 230, 245].map((y) => (
        <line
          key={y}
          x1={14 + (y - 200) * 0.6}
          y1={y}
          x2={166 - (y - 200) * 0.3}
          y2={y}
          stroke="white"
          strokeWidth={1.2}
          opacity={opacity * 0.25}
        />
      ))}

      {/* Ankle ornaments */}
      <rect x="33" y="258" width="15" height="5" rx="2.5" fill={color} opacity={opacity * 0.85} />
      <rect x="152" y="232" width="15" height="5" rx="2.5" fill={color} opacity={opacity * 0.85} />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   KERALA BORDER
   A horizontal repeating diamond-and-dot
   motif strip. Use as a section divider.
───────────────────────────────────────────── */
export function KeralaBorder({
  className = '',
  color = '#c32025',
  opacity = 1,
}: ArtProps) {
  const unitW = 44
  const h = 32
  const units = 25
  const totalW = units * unitW

  return (
    <svg
      viewBox={`0 0 ${totalW} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Top and bottom rule lines */}
      <line x1={0} y1={3} x2={totalW} y2={3} stroke={color} strokeWidth={1} opacity={opacity * 0.3} />
      <line x1={0} y1={h - 3} x2={totalW} y2={h - 3} stroke={color} strokeWidth={1} opacity={opacity * 0.3} />

      {Array.from({ length: units }, (_, i) => {
        const cx = i * unitW + unitW / 2
        const cy = h / 2
        return (
          <g key={i}>
            {/* Central diamond */}
            <polygon
              points={`${cx},${cy - 9} ${cx + 7},${cy} ${cx},${cy + 9} ${cx - 7},${cy}`}
              fill={color}
              opacity={opacity}
            />
            {/* Small side dots between units */}
            <circle cx={cx - unitW / 2 + 4} cy={cy} r={2} fill={color} opacity={opacity * 0.45} />
            {/* Top/bottom accent dots */}
            <circle cx={cx} cy={cy - 13} r={1.5} fill={color} opacity={opacity * 0.35} />
            <circle cx={cx} cy={cy + 13} r={1.5} fill={color} opacity={opacity * 0.35} />
          </g>
        )
      })}
    </svg>
  )
}
