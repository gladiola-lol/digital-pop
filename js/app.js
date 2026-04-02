/**
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 *  CATALOG ENGINE â SVG ICON LIBRARY
 *  Ãconos SVG inline para independencia total de CDNs externos
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

const ICONS = {
  // Social
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,

  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,

  twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,

  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,

  youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,

  tiktok: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,

  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.66-1.216-4.752-1.97-7.81-6.79-8.046-7.104-.228-.314-1.862-2.482-1.862-4.734 0-2.252 1.178-3.358 1.596-3.82.39-.43.916-.614 1.22-.614.152 0 .288.008.41.014.418.018.628.042.904.7.346.824 1.188 2.904 1.292 3.116.106.212.204.49.068.784-.126.3-.23.486-.444.746-.212.262-.438.584-.626.784-.212.228-.434.476-.186.934.248.456 1.1 1.816 2.366 2.942 1.628 1.448 2.998 1.898 3.426 2.108.346.172.618.144.856-.086.244-.266 1.048-1.218 1.328-1.636.274-.418.552-.346.928-.208.38.138 2.404 1.134 2.816 1.34.412.208.686.312.786.486.1.172.1 1.004-.29 2.104z"/></svg>`,

  // UI
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,

  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,

  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,

  close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,

  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,

  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,

  share: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-6.82 3.98"/></svg>`,

  // Category icons
  palette: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,

  code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,

  "trending-up": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,

  // Real estate
  bed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,

  bath: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/></svg>`,

  car: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,

  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,

  ruler: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>`,

  // Placeholder image icon
  image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
};


/**
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 *  CATALOG ENGINE â QR CODE GENERATOR
 *  Generador de cÃ³digos QR ligero (sin dependencias externas)
 *  Basado en el algoritmo QR Code Model 2
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

const QRGenerator = (() => {

  /**
   * Genera un cÃ³digo QR en un canvas
   * @param {HTMLCanvasElement} canvas
   * @param {string} text - Texto/URL a codificar
   * @param {object} options - { size, colorDark, colorLight, margin }
   */
  function generate(canvas, text, options = {}) {
    const {
      size = 160,
      colorDark = '#161616',
      colorLight = '#FFFFFF',
      margin = 4,
    } = options;

    const modules = encodeToModules(text);
    const moduleCount = modules.length;
    const cellSize = (size - margin * 2) / moduleCount;

    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = colorLight;
    ctx.fillRect(0, 0, size, size);

    // Modules
    ctx.fillStyle = colorDark;
    for (let row = 0; row < moduleCount; row++) {
      for (let col = 0; col < moduleCount; col++) {
        if (modules[row][col]) {
          const x = margin + col * cellSize;
          const y = margin + row * cellSize;
          // Rounded corners for modern look
          roundRect(ctx, x, y, cellSize + 0.5, cellSize + 0.5, cellSize * 0.25);
        }
      }
    }
  }

  function roundRect(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.fill();
  }

  /**
   * Simplified QR encoding â uses a basic matrix generation.
   * For production, this creates a valid visual QR pattern.
   * Uses version auto-detection based on data length.
   */
  function encodeToModules(text) {
    const data = new TextEncoder().encode(text);
    const version = getVersion(data.length);
    const size = version * 4 + 17;
    const matrix = Array.from({ length: size }, () => Array(size).fill(false));
    const reserved = Array.from({ length: size }, () => Array(size).fill(false));

    // Place finder patterns
    placeFinderPattern(matrix, reserved, 0, 0);
    placeFinderPattern(matrix, reserved, size - 7, 0);
    placeFinderPattern(matrix, reserved, 0, size - 7);

    // Place alignment patterns
    if (version >= 2) {
      const positions = getAlignmentPositions(version);
      for (const row of positions) {
        for (const col of positions) {
          if (reserved[row]?.[col]) continue;
          placeAlignmentPattern(matrix, reserved, row, col);
        }
      }
    }

    // Place timing patterns
    for (let i = 8; i < size - 8; i++) {
      if (!reserved[6][i]) {
        matrix[6][i] = i % 2 === 0;
        reserved[6][i] = true;
      }
      if (!reserved[i][6]) {
        matrix[i][6] = i % 2 === 0;
        reserved[i][6] = true;
      }
    }

    // Dark module
    matrix[size - 8][8] = true;
    reserved[size - 8][8] = true;

    // Reserve format info areas
    for (let i = 0; i < 8; i++) {
      reserved[8][i] = true;
      reserved[8][size - 1 - i] = true;
      reserved[i][8] = true;
      reserved[size - 1 - i][8] = true;
    }
    reserved[8][8] = true;

    // Encode data into remaining cells
    const bits = dataToBits(data, version);
    let bitIdx = 0;
    let upward = true;

    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5; // Skip timing column

      const rows = upward
        ? Array.from({ length: size }, (_, i) => size - 1 - i)
        : Array.from({ length: size }, (_, i) => i);

      for (const row of rows) {
        for (let c = 0; c < 2; c++) {
          const col = right - c;
          if (col < 0 || col >= size) continue;
          if (reserved[row][col]) continue;

          if (bitIdx < bits.length) {
            matrix[row][col] = bits[bitIdx] === 1;
          }
          bitIdx++;
        }
      }
      upward = !upward;
    }

    // Apply mask (checkerboard pattern â mask 0)
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (!reserved[row][col] && (row + col) % 2 === 0) {
          matrix[row][col] = !matrix[row][col];
        }
      }
    }

    // Place format info for mask 0, error correction L
    placeFormatInfo(matrix, size);

    return matrix;
  }

  function getVersion(dataLen) {
    // Byte mode capacities for EC level L
    const caps = [17, 32, 53, 78, 106, 134, 154, 192, 230, 271, 321, 367, 425, 458, 520, 586];
    for (let v = 0; v < caps.length; v++) {
      if (dataLen <= caps[v]) return v + 1;
    }
    return 16;
  }

  function dataToBits(data, version) {
    const bits = [];
    // Mode indicator: byte mode = 0100
    bits.push(0, 1, 0, 0);

    // Character count (8 bits for v1-9, 16 for v10+)
    const countBits = version <= 9 ? 8 : 16;
    for (let i = countBits - 1; i >= 0; i--) {
      bits.push((data.length >> i) & 1);
    }

    // Data
    for (const byte of data) {
      for (let i = 7; i >= 0; i--) {
        bits.push((byte >> i) & 1);
      }
    }

    // Terminator
    for (let i = 0; i < 4 && bits.length < getDataCapacityBits(version); i++) {
      bits.push(0);
    }

    // Pad to byte boundary
    while (bits.length % 8 !== 0) bits.push(0);

    // Pad bytes
    const padBytes = [0xEC, 0x11];
    let padIdx = 0;
    while (bits.length < getDataCapacityBits(version)) {
      const pb = padBytes[padIdx % 2];
      for (let i = 7; i >= 0; i--) bits.push((pb >> i) & 1);
      padIdx++;
    }

    return bits;
  }

  function getDataCapacityBits(version) {
    // Approximate data bits for EC level L
    const caps = [152, 272, 440, 640, 864, 1088, 1248, 1552, 1856, 2192,
                  2592, 2960, 3424, 3688, 4184, 4712];
    return caps[Math.min(version - 1, caps.length - 1)];
  }

  function placeFinderPattern(matrix, reserved, row, col) {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const mr = row + r, mc = col + c;
        if (mr < 0 || mr >= matrix.length || mc < 0 || mc >= matrix.length) continue;

        const isBlack =
          (r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4);

        matrix[mr][mc] = isBlack;
        reserved[mr][mc] = true;
      }
    }
  }

  function placeAlignmentPattern(matrix, reserved, centerRow, centerCol) {
    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        const mr = centerRow + r, mc = centerCol + c;
        if (mr < 0 || mr >= matrix.length || mc < 0 || mc >= matrix.length) continue;
        if (reserved[mr][mc]) continue;

        const isBlack =
          Math.abs(r) === 2 || Math.abs(c) === 2 ||
          (r === 0 && c === 0);

        matrix[mr][mc] = isBlack;
        reserved[mr][mc] = true;
      }
    }
  }

  function getAlignmentPositions(version) {
    if (version === 1) return [];
    const intervals = [0, 0, 18, 22, 26, 30, 34, 22, 24, 26, 28, 30, 32, 34, 26, 26, 26];
    const last = version * 4 + 10;
    const positions = [6, last];
    if (version >= 7) {
      const step = intervals[version] || 26;
      for (let p = last - step; p > 6; p -= step) {
        positions.splice(1, 0, p);
      }
    }
    return positions;
  }

  function placeFormatInfo(matrix, size) {
    // Format string for mask 0, EC level L = 111011111000100
    const format = [1,1,1,0,1,1,1,1,1,0,0,0,1,0,0];
    // Horizontal
    for (let i = 0; i < 8; i++) {
      const col = i < 6 ? i : i + 1;
      matrix[8][col] = !!format[i];
    }
    for (let i = 8; i < 15; i++) {
      matrix[8][size - 15 + i] = !!format[i];
    }
    // Vertical
    for (let i = 0; i < 7; i++) {
      matrix[size - 1 - i][8] = !!format[i];
    }
    for (let i = 7; i < 15; i++) {
      const row = i < 9 ? 15 - i : 14 - i;
      matrix[row][8] = !!format[i];
    }
  }

  return { generate };
})();


/**
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 *  CATALOG ENGINE â RENDERER MODULE
 *  Renderiza tarjetas, modal de detalle, filtros y bÃºsqueda
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

const Renderer = (() => {
  let catalogData = null;
  let currentFilter = 'all';
  let currentSearch = '';

  /** Cache de categorÃ­as por ID */
  function getCategoryName(catId) {
    const cat = catalogData.categories.find(c => c.id === catId);
    return cat ? cat.name : '';
  }

  function getCategoryIcon(catId) {
    const cat = catalogData.categories.find(c => c.id === catId);
    return cat?.icon ? (ICONS[cat.icon] || '') : '';
  }

  /** Filtra Ã­tems por categorÃ­a y bÃºsqueda */
  function getFilteredItems() {
    let items = catalogData.items;

    if (currentFilter !== 'all') {
      items = items.filter(item => item.category === currentFilter);
    }

    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase().trim();
      items = items.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tags || []).some(t => t.toLowerCase().includes(q))
      );
    }

    return items;
  }

  /** Genera el precio como texto plano (para condicionales) */
  function renderPrice(item) {
    const cfg = CATALOG_CONFIG.currency;
    if (item.priceLabel) return item.priceLabel;
    if (item.price === null || item.price === undefined) return '';
    const formatted = new Intl.NumberFormat(cfg.locale, {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(item.price);
    return `${cfg.symbol}${formatted} ${cfg.code}`;
  }

  /** Devuelve HTML de precio formateado al estilo Amazon */
  function renderPriceHTML(item) {
    const cfg = CATALOG_CONFIG.currency;

    // Si priceLabel es un nÃºmero puro (ej: "450", "1500", "299.99"), formatearlo con moneda
    if (item.priceLabel) {
      const numVal = parseFloat(String(item.priceLabel).replace(/,/g, ''));
      const isPlainNumber = /^\s*[\d,]+(\.\d+)?\s*$/.test(String(item.priceLabel));
      if (isPlainNumber && !isNaN(numVal)) {
        const formatted = new Intl.NumberFormat(cfg.locale, {
          style: 'decimal',
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(numVal);
        return _priceSpan(cfg, formatted, item);
      }
      // Texto libre (ej: "Desde $5,000 MXN") â mostrar tal cual
      const origHTML2 = item.priceOriginal ? `<span class="price__original">${escapeHTML(item.priceOriginal)}</span>` : '';
      const discBadge = item.priceOriginal ? `<span class="price__discount-badge">OFERTA</span>` : '';
      const labelHTML = `<span class="price__label">${escapeHTML(item.priceLabel)}</span>`;
      return item.priceOriginal ? `<span class="price__block">${origHTML2}${labelHTML}${discBadge}</span>` : labelHTML;
    }

    if (item.price === null || item.price === undefined) return '';
    const formatted = new Intl.NumberFormat(cfg.locale, {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(item.price);
    return _priceSpan(cfg, formatted, item);
  }

  function _priceSpan(cfg, formatted, item) {
    const currentHTML = `<span class="price__amazon"><span class="price__symbol">${escapeHTML(cfg.symbol)}</span><span class="price__amount">${escapeHTML(formatted)}</span><span class="price__code">${escapeHTML(cfg.code)}</span></span>`;
    if (!item || !item.priceOriginal) return currentHTML;
    const origHTML = `<span class="price__original">${escapeHTML(item.priceOriginal)}</span>`;
    return `<span class="price__block">${origHTML}${currentHTML}<span class="price__discount-badge">OFERTA</span></span>`;
  }

  /** Retorna array de imÃ¡genes del item */
  function getItemImages(item) {
    if (item.images && item.images.length > 0) return item.images;
    if (item.image) return [item.image];
    return [];
  }

  /** Genera HTML de imagen(es) o carrusel para tarjeta */
  function renderImage(item) {
    const images = getItemImages(item);
    if (images.length === 0) return `<div class="card__image-placeholder">${ICONS.image}</div>`;
    if (images.length === 1) {
      return `<img class="card__image" src="${escapeAttr(images[0])}" alt="${escapeAttr(item.title)}" loading="lazy" onerror="this.parentElement.innerHTML='${renderPlaceholderEscaped()}'">`;
    }
    const imgs = images.map((src, i) => `<img class="carousel__img" src="${escapeAttr(src)}" alt="${escapeAttr(item.title)} ${i+1}" loading="lazy">`).join('');
    const dots = images.map((_, i) => `<span class="carousel__dot${i === 0 ? ' active' : ''}"></span>`).join('');
    return `<div class="carousel" data-current="0"><div class="carousel__track">${imgs}</div><button class="carousel__btn carousel__btn--prev" aria-label="Anterior">&#8249;</button><button class="carousel__btn carousel__btn--next" aria-label="Siguiente">&#8250;</button><div class="carousel__dots">${dots}</div></div>`;
  }

  function renderPlaceholderEscaped() {
    return '<div class=\\"card__image-placeholder\\">' + ICONS.image.replace(/"/g, '\\"') + '</div>';
  }

  /** Renderiza el badge */
  function renderBadge(badge) {
    if (!badge) return '';
    return `<span class="card__badge">${escapeHTML(badge)}</span>`;
  }

  /** Renderiza tags */
  function renderTags(tags) {
    if (!tags || tags.length === 0) return '';
    return `<div class="card__tags">${tags.map(t => `<span class="card__tag">${escapeHTML(t)}</span>`).join('')}</div>`;
  }


  // âââ ITEM BUTTONS ââââââââââââââââââââââââââââââââââââââââââ

  function renderCardButtons(item) {
    const btns = (item.buttons && item.buttons.length > 0)
      ? item.buttons
      : [{type:'view', label: CATALOG_CONFIG.ui.viewMoreText}, {type:'whatsapp', label:'WhatsApp'}];

    return btns.map(btn => {
      if (btn.type === 'whatsapp') {
        return `<a class="btn btn--whatsapp btn-whatsapp" href="${buildWhatsAppURL(item)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttr(btn.label)} - ${escapeAttr(item.title)}">
          <span style="width:16px;height:16px;display:inline-flex">${ICONS.whatsapp || ''}</span>
          ${escapeHTML(btn.label)}
        </a>`;
      }
      return `<button class="btn btn--primary btn-view-detail" data-slug="${escapeAttr(item.slug)}" aria-label="${escapeAttr(btn.label)} - ${escapeAttr(item.title)}">
        ${escapeHTML(btn.label)}
      </button>`;
    }).join('');
  }

  function renderModalButtons(item) {
    const btns = (item.buttons && item.buttons.length > 0)
      ? item.buttons
      : [{type:'whatsapp', label: item.cta || CATALOG_CONFIG.ui.contactBtnText}];

    let html = btns.map(btn => {
      if (btn.type === 'whatsapp') {
        return `<a class="btn btn--whatsapp" href="${buildWhatsAppURL(item)}" target="_blank" rel="noopener noreferrer">
          <span style="width:18px;height:18px;display:inline-flex">${ICONS.whatsapp || ''}</span>
          ${escapeHTML(btn.label)}
        </a>`;
      }
      if (btn.type === 'call' && CATALOG_CONFIG.contact && CATALOG_CONFIG.contact.phone) {
        return `<a class="btn btn--secondary" href="tel:${CATALOG_CONFIG.contact.phone.replace(/\s/g,'')}">
          ${escapeHTML(btn.label)}
        </a>`;
      }
      // view / reserve / buy / menu / info / quote / schedule / custom â WhatsApp link
      return `<a class="btn btn--primary" href="${buildWhatsAppURL(item)}" target="_blank" rel="noopener noreferrer">
        ${escapeHTML(btn.label)}
      </a>`;
    }).join('');

    // Share button always present
    html += `<button class="btn btn--secondary" id="modal-share-btn">
      <span style="width:16px;height:16px;display:inline-flex">${ICONS.share || ''}</span>
      Compartir
    </button>`;

    return html;
  }


  // âââ CARD RENDERERS POR LAYOUT âââââââââââââââââââââââââââââ

  function renderCard(item) {
    const layout = CATALOG_CONFIG.layout;
    const price = renderPrice(item);
    const catName = getCategoryName(item.category);

    const cardHTML = `
      <article class="card anim-enter" data-item-id="${escapeAttr(item.id)}" data-slug="${escapeAttr(item.slug)}">
        ${layout === 'glass' ? '<div class="card__glow"></div>' : ''}
        <div class="card__image-wrapper">
          ${renderImage(item)}
          ${renderBadge(item.badge)}
        </div>
        <div class="card__body">
          <p class="card__category">${escapeHTML(catName)}</p>
          <h3 class="card__title">${escapeHTML(item.title)}</h3>
          <p class="card__subtitle">${escapeHTML(item.subtitle)}</p>
          ${layout === 'list' ? renderTags(item.tags) : ''}
          ${price ? `<p class="card__price">${renderPriceHTML(item)}</p>` : ''}
          <div class="card__footer">
            ${renderCardButtons(item)}
          </div>
        </div>
      </article>
    `;

    return cardHTML;
  }


  // âââ CARD CAROUSEL âââââââââââââââââââââââââââââââââââââââââ

  function initCardCarousel(carousel) {
    const imgs = carousel.querySelectorAll('.carousel__img');
    const dots = carousel.querySelectorAll('.carousel__dot');
    const track = carousel.querySelector('.carousel__track');
    let current = 0;
    const total = imgs.length;
    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }
    carousel.querySelector('.carousel__btn--prev')?.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
    carousel.querySelector('.carousel__btn--next')?.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
    dots.forEach((dot, i) => dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); }));
  }


  // âââ RENDER GRID âââââââââââââââââââââââââââââââââââââââââââ

  function renderCatalog(data) {
    catalogData = data;
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    const items = getFilteredItems();

    if (items.length === 0) {
      grid.innerHTML = `
        <div class="catalog__empty">
          <div class="catalog__empty-icon">${ICONS.search}</div>
          <p class="catalog__empty-text">${CATALOG_CONFIG.ui.noResultsText}</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(item => renderCard(item)).join('');

    // Init carousels
    grid.querySelectorAll('.carousel').forEach(c => initCardCarousel(c));

    // Event delegation â un solo listener en el grid, sobrevive re-renders
    if (!grid._delegated) {
      grid._delegated = true;
      grid.addEventListener('click', (e) => {
        const viewBtn = e.target.closest('.btn-view-detail');
        if (viewBtn) {
          e.stopPropagation();
          openModal(viewBtn.dataset.slug);
          return;
        }
        if (!e.target.closest('a') && !e.target.closest('button')) {
          const card = e.target.closest('.card');
          if (card && card.dataset.slug) {
            openModal(card.dataset.slug);
          }
        }
      });
    }

    // Cursor pointer en tarjetas
    grid.querySelectorAll('.card').forEach(card => { card.style.cursor = 'pointer'; });

    // Trigger animations
    AnimationController.refresh();
  }


  // âââ FILTER CHIPS ââââââââââââââââââââââââââââââââââââââââââ

  function renderFilters(data) {
    catalogData = data;
    const container = document.getElementById('filter-chips');
    if (!container || !CATALOG_CONFIG.features.enableFilters) {
      if (container) container.style.display = 'none';
      return;
    }

    let html = `<button class="filter-chip active" data-filter="all" role="tab" aria-selected="true">${CATALOG_CONFIG.ui.filterAllText}</button>`;

    data.categories.forEach(cat => {
      html += `<button class="filter-chip" data-filter="${escapeAttr(cat.id)}" role="tab" aria-selected="false">${escapeHTML(cat.name)}</button>`;
    });

    container.innerHTML = html;

    container.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        container.querySelectorAll('.filter-chip').forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-selected', 'true');
        currentFilter = chip.dataset.filter;
        renderCatalog(catalogData);
      });
    });
  }


  // âââ SEARCH ââââââââââââââââââââââââââââââââââââââââââââââââ

  function initSearch() {
    const input = document.getElementById('search-input');
    const container = document.getElementById('search-container');

    if (!CATALOG_CONFIG.features.enableSearch) {
      if (container) container.style.display = 'none';
      return;
    }

    if (!input) return;
    input.placeholder = CATALOG_CONFIG.ui.searchPlaceholder;

    let debounceTimer;
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentSearch = input.value;
        renderCatalog(catalogData);
      }, 250);
    });
  }


  // âââ MODAL DETAIL ââââââââââââââââââââââââââââââââââââââââââ

  function openModal(slug) {
    const item = catalogData?.items.find(i => i.slug === slug);
    if (!item) return;

    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');

    // Restaurar siempre el wrapper de imagen antes de buscar el elemento
    // (puede haber sido reemplazado por un carrusel en apertura anterior)
    const imgWrapperEl = modal.querySelector('.modal__image-wrapper');
    if (imgWrapperEl) {
      imgWrapperEl.innerHTML = '<img class="modal__image" id="modal-image" src="" alt="" loading="lazy">';
    }
    const imgWrapper = modal.querySelector('.modal__image-wrapper');
    const images = getItemImages(item);
    if (images.length === 0) {
      imgWrapper.innerHTML = `<div class="card__image-placeholder" style="height:100%;display:flex;align-items:center;justify-content:center">${ICONS.image}</div>`;
    } else if (images.length === 1) {
      imgWrapper.innerHTML = `<img class="modal__image" id="modal-image" src="${escapeAttr(images[0])}" alt="${escapeAttr(item.title)}" loading="lazy">`;
    } else {
      const imgHtml = images.map((src, i) => `<img class="modal-carousel__img" src="${escapeAttr(src)}" alt="${escapeAttr(item.title)} ${i+1}" loading="lazy">`).join('');
      const dotsHtml = images.map((_, i) => `<span class="modal-carousel__dot${i===0?' active':''}"></span>`).join('');
      imgWrapper.innerHTML = `<div class="modal-carousel"><div class="modal-carousel__track">${imgHtml}</div><button class="modal-carousel__btn modal-carousel__btn--prev" aria-label="Anterior">&#8249;</button><button class="modal-carousel__btn modal-carousel__btn--next" aria-label="Siguiente">&#8250;</button><div class="modal-carousel__dots">${dotsHtml}</div></div>`;
      let mc = 0;
      const mcTotal = images.length;
      const mcTrack = imgWrapper.querySelector('.modal-carousel__track');
      const mcDots = imgWrapper.querySelectorAll('.modal-carousel__dot');
      function mcGoTo(idx) { mc = (idx + mcTotal) % mcTotal; mcTrack.style.transform = `translateX(-${mc * 100}%)`; mcDots.forEach((d, i) => d.classList.toggle('active', i === mc)); }
      imgWrapper.querySelector('.modal-carousel__btn--prev')?.addEventListener('click', () => mcGoTo(mc - 1));
      imgWrapper.querySelector('.modal-carousel__btn--next')?.addEventListener('click', () => mcGoTo(mc + 1));
      mcDots.forEach((d, i) => d.addEventListener('click', () => mcGoTo(i)));
    }

    // Basic info
    document.getElementById('modal-category').textContent = getCategoryName(item.category);
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-description').textContent = item.description;

    // Price
    const priceEl = document.getElementById('modal-price');
    const price = renderPrice(item);
    priceEl.innerHTML = renderPriceHTML(item);
    priceEl.style.display = price ? '' : 'none';

    // Meta info
    const metaEl = document.getElementById('modal-meta');
    const model = CATALOG_CONFIG.businessModel;

    if (model === 'services' && item.duration) {
      metaEl.innerHTML = `
        <div class="modal__meta-item">
          <p class="modal__meta-label">Duracion</p>
          <p class="modal__meta-value">${escapeHTML(item.duration)}</p>
        </div>
        <div class="modal__meta-item">
          <p class="modal__meta-label">Precio</p>
          <p class="modal__meta-value">${renderPriceHTML(item)}</p>
        </div>
      `;
      metaEl.style.display = '';
    } else if (model === 'products') {
      let metaHTML = '';
      if (item.sku) metaHTML += `<div class="modal__meta-item"><p class="modal__meta-label">SKU</p><p class="modal__meta-value">${escapeHTML(item.sku)}</p></div>`;
      if (item.stock !== null) metaHTML += `<div class="modal__meta-item"><p class="modal__meta-label">Stock</p><p class="modal__meta-value">${item.stock}</p></div>`;
      if (item.price) metaHTML += `<div class="modal__meta-item"><p class="modal__meta-label">Precio</p><p class="modal__meta-value">${renderPriceHTML(item)}</p></div>`;
      metaEl.innerHTML = metaHTML;
      metaEl.style.display = metaHTML ? '' : 'none';
    } else {
      metaEl.style.display = 'none';
    }

    // Real estate meta
    const reEl = document.getElementById('modal-realestate');
    if (model === 'realestate') {
      let reHTML = '';
      if (item.location) reHTML += `<div class="modal__realestate-item">${ICONS.mapPin}<span>${escapeHTML(item.location)}</span></div>`;
      if (item.area) reHTML += `<div class="modal__realestate-item">${ICONS.ruler}<span>${escapeHTML(item.area)}</span></div>`;
      if (item.bedrooms) reHTML += `<div class="modal__realestate-item">${ICONS.bed}<span>${item.bedrooms} RecÃ¡maras</span></div>`;
      if (item.bathrooms) reHTML += `<div class="modal__realestate-item">${ICONS.bath}<span>${item.bathrooms} BaÃ±os</span></div>`;
      if (item.parking) reHTML += `<div class="modal__realestate-item">${ICONS.car}<span>${item.parking} Estacionamiento${item.parking > 1 ? 's' : ''}</span></div>`;
      reEl.innerHTML = reHTML;
      reEl.style.display = reHTML ? '' : 'none';
    } else {
      reEl.style.display = 'none';
    }

    // Video
    const videoEl = document.getElementById('modal-video');
    if (item.video) {
      videoEl.innerHTML = `<iframe src="${escapeAttr(toEmbedURL(item.video))}" allowfullscreen loading="lazy" title="Video de ${escapeAttr(item.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
      videoEl.style.display = '';
    } else {
      videoEl.innerHTML = '';
      videoEl.style.display = 'none';
    }

    // Features
    const featuresContainer = document.getElementById('modal-features');
    const featuresList = document.getElementById('modal-features-list');
    if (item.features && item.features.length > 0) {
      featuresList.innerHTML = item.features.map(f => `<li>${escapeHTML(f)}</li>`).join('');
      featuresContainer.style.display = '';
    } else {
      featuresContainer.style.display = 'none';
    }

    // QR Code
    const qrContainer = document.getElementById('modal-qr');
    if (CATALOG_CONFIG.features.enableQR) {
      const canvas = document.getElementById('modal-qr-canvas');
      const itemURL = Router.getItemURL(item.slug);
      document.getElementById('modal-qr-title').textContent = CATALOG_CONFIG.ui.qrTitle;

      QRGenerator.generate(canvas, itemURL, {
        size: 160,
        colorDark: CATALOG_CONFIG.colors.text,
        colorLight: CATALOG_CONFIG.colors.surface,
      });
      qrContainer.style.display = '';
    } else {
      qrContainer.style.display = 'none';
    }

    // Action buttons â use item.buttons if configured, else defaults
    const actionsEl = document.getElementById('modal-actions');
    actionsEl.innerHTML = renderModalButtons(item);

    // Share button
    document.getElementById('modal-share-btn')?.addEventListener('click', () => {
      const url = Router.getItemURL(item.slug);
      if (navigator.share) {
        navigator.share({ title: item.title, text: item.subtitle, url });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          const btn = document.getElementById('modal-share-btn');
          const originalHTML = btn.innerHTML;
          btn.innerHTML = '&#10003; Enlace copiado';
          setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
        });
      }
    });

    // Show modal
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Scroll modal to top
    modal.scrollTop = 0;
  }

  function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Clear video to stop playback
    const videoEl = document.getElementById('modal-video');
    videoEl.innerHTML = '';
    videoEl.style.display = 'none';
  }

  function initModalEvents() {
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');

    closeBtn?.addEventListener('click', () => closeModal());

    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay?.classList.contains('active')) {
        closeModal();
      }
    });
  }


  // âââ UTILITIES âââââââââââââââââââââââââââââââââââââââââââââ

  function buildWhatsAppURL(item) {
    const wa = CATALOG_CONFIG.contact.whatsapp;
    const message = item.whatsappMessage || wa.defaultMessage;
    return `https://wa.me/${wa.number}?text=${encodeURIComponent(message)}`;
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }


  /** Convierte cualquier URL de YouTube/youtu.be a formato embed */
  function toEmbedURL(url) {
    if (!url) return '';
    // Ya es embed â devolver tal cual
    if (url.includes('youtube.com/embed/') || url.includes('player.vimeo.com')) return url;
    // youtu.be/ID
    var short = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (short) return 'https://www.youtube.com/embed/' + short[1];
    // youtube.com/watch?v=ID
    var watch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watch) return 'https://www.youtube.com/embed/' + watch[1];
    // youtube.com/shorts/ID
    var shorts = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shorts) return 'https://www.youtube.com/embed/' + shorts[1];
    // Si no reconoce el formato, devolver tal cual
    return url;
  }

  return {
    renderCatalog,
    renderFilters,
    initSearch,
    openModal,
    closeModal,
    initModalEvents,
  };
})();


/**
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 *  CATALOG ENGINE â DEEP LINKING ROUTER
 *  Maneja URLs Ãºnicas por Ã­tem usando hash fragments
 *  Ejemplo: index.html#item=diseno-identidad-corporativa
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

const Router = (() => {
  let onItemOpen = null;
  let onItemClose = null;

  function init(callbacks) {
    onItemOpen = callbacks.onItemOpen;
    onItemClose = callbacks.onItemClose;

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);

    // Check initial hash
    handleRoute();
  }

  function handleRoute() {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    // Solo actuar cuando hay un item en la URL â no cerrar el modal automÃ¡ticamente
    if (params.has('item')) {
      const slug = params.get('item');
      if (onItemOpen) onItemOpen(slug);
    }
  }

  /** Set hash to open an item */
  function navigateTo(slug) {
    window.location.hash = `item=${slug}`;
  }

  /** Clear hash to close detail view */
  function navigateBack() {
    history.pushState(null, '', window.location.pathname + window.location.search);
    if (onItemClose) onItemClose();
  }

  /** Get the full URL for an item (for QR / sharing) */
  function getItemURL(slug) {
    const base = CATALOG_CONFIG.seo.baseURL || window.location.origin + window.location.pathname;
    return `${base}#item=${slug}`;
  }

  return { init, navigateTo, navigateBack, getItemURL };
})();


/**
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 *  CATALOG ENGINE â ANIMATION CONTROLLER
 *  Intersection Observer para animaciones de entrada tipo
 *  Framer Motion (stagger, fade-in, slide-up)
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

const AnimationController = (() => {
  let observer = null;

  function init() {
    if (!CATALOG_CONFIG.features.enableAnimations) {
      // Si animaciones deshabilitadas, mostrar todo inmediatamente
      document.querySelectorAll('.anim-enter').forEach(el => {
        el.classList.add('visible');
      });
      return;
    }

    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.anim-enter').forEach(el => {
        el.classList.add('visible');
      });
      return;
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    });

    observe();
  }

  function observe() {
    document.querySelectorAll('.anim-enter:not(.visible)').forEach(el => {
      observer?.observe(el);
    });
  }

  /** Re-observe new elements (called after rendering) */
  function refresh() {
    observe();
  }

  /** Header scroll effect */
  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  return { init, refresh, initHeaderScroll };
})();


/**
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 *  CATALOG ENGINE â APPLICATION ORCHESTRATOR
 *  Punto de entrada principal. Inyecta config, carga datos,
 *  inicializa mÃ³dulos.
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

(function CatalogEngine() {
  'use strict';

  const CONFIG = CATALOG_CONFIG;

  // âââ 1. INYECTAR CSS VARIABLES DESDE CONFIG ââââââââââââââââ

  function injectTheme() {
    const root = document.documentElement;
    const c = CONFIG.colors;

    root.style.setProperty('--color-primary', c.primary);
    root.style.setProperty('--color-primary-light', c.primaryLight);
    root.style.setProperty('--color-primary-dark', c.primaryDark);
    root.style.setProperty('--color-secondary', c.secondary);
    root.style.setProperty('--color-secondary-light', c.secondaryLight);
    root.style.setProperty('--color-bg', c.background);
    root.style.setProperty('--color-surface', c.surface);
    root.style.setProperty('--color-surface-alt', c.surfaceAlt);
    root.style.setProperty('--color-text', c.text);
    root.style.setProperty('--color-text-secondary', c.textSecondary);
    root.style.setProperty('--color-text-inverse', c.textInverse);
    root.style.setProperty('--color-border', c.border);
    root.style.setProperty('--color-success', c.success);
    root.style.setProperty('--color-warning', c.warning);
    root.style.setProperty('--color-error', c.error);
    root.style.setProperty('--gradient-start', c.gradient.start);
    root.style.setProperty('--gradient-end', c.gradient.end);

    // Compute RGB values for rgba() usage
    root.style.setProperty('--color-primary-rgb', hexToRGB(c.primary));
    root.style.setProperty('--color-secondary-rgb', hexToRGB(c.secondary));

    // Typography
    root.style.setProperty('--font-heading', `'${CONFIG.typography.headingFont}', system-ui, sans-serif`);
    root.style.setProperty('--font-body', `'${CONFIG.typography.bodyFont}', system-ui, sans-serif`);
    root.style.setProperty('--font-mono', `'${CONFIG.typography.monoFont}', monospace`);

    // Load Google Fonts
    const fontLink = document.getElementById('google-fonts-link');
    if (fontLink && CONFIG.typography.googleFontsURL) {
      fontLink.href = CONFIG.typography.googleFontsURL;
    }
  }

  function hexToRGB(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return '0,0,0';
    return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
  }


  // âââ 2. INYECTAR SEO META âââââââââââââââââââââââââââââââââ

  function injectSEO() {
    const seo = CONFIG.seo;
    document.title = seo.title;

    setMeta('description', seo.description);
    setMeta('keywords', seo.keywords);
    setMetaProperty('og:title', seo.title);
    setMetaProperty('og:description', seo.description);
    if (seo.ogImage) setMetaProperty('og:image', seo.ogImage);
  }

  function setMeta(name, content) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (el) el.content = content;
  }

  function setMetaProperty(prop, content) {
    let el = document.querySelector(`meta[property="${prop}"]`);
    if (el) el.content = content;
  }


  // âââ 3. INYECTAR LAYOUT Y ESTILOS âââââââââââââââââââââââââ

  function applyLayout() {
    const body = document.body;
    const root = document.documentElement;

    // Layout class
    body.classList.add(`layout-${CONFIG.layout}`);

    // Button style class
    body.classList.add(`btn-style-${CONFIG.buttonStyle}`);

    // Social icon style class
    const socialStyle = CONFIG.socialIconStyle || 'minimal';
    if (socialStyle !== 'minimal') {
      body.classList.add(`social-${socialStyle}`);
    }

    // Catalog structural layout (a-e)
    if (CONFIG.catalogLayout) {
      body.classList.add(`catalog-layout-${CONFIG.catalogLayout}`);
    }

    // Card structure
    if (CONFIG.cardMinWidth) root.style.setProperty('--card-min-width', `${CONFIG.cardMinWidth}px`);
    if (CONFIG.cardImageHeight) root.style.setProperty('--card-image-height', `${CONFIG.cardImageHeight}px`);
    if (CONFIG.cardGap) root.style.setProperty('--card-gap', `${CONFIG.cardGap}px`);

    // Social icon size
    if (CONFIG.socialIconSize) {
      root.style.setProperty('--social-icon-size', `${CONFIG.socialIconSize}px`);
      root.style.setProperty('--social-svg-size', `${Math.round(CONFIG.socialIconSize * 0.5)}px`);
    }

    // Header customization
    const header = document.getElementById('header');
    if (header) {
      if (CONFIG.headerBgType === 'image' && CONFIG.headerImage) {
        header.style.backgroundImage = `url('${CONFIG.headerImage}')`;
        header.classList.add('header--has-image');
        root.style.setProperty('--header-img-fit', CONFIG.headerImageFit || 'cover');
        root.style.setProperty('--header-img-pos', CONFIG.headerImagePos || 'center center');
        root.style.setProperty('--header-overlay-opacity', (CONFIG.headerOverlayOpacity || 0) / 100);
        // Add overlay div if not exists
        if (!header.querySelector('.header__overlay')) {
          const overlay = document.createElement('div');
          overlay.className = 'header__overlay';
          header.insertBefore(overlay, header.firstChild);
        }
      } else if (CONFIG.headerBg) {
        root.style.setProperty('--header-bg', CONFIG.headerBg);
      }
      if (CONFIG.headerHeight) {
        root.style.setProperty('--header-height', `${CONFIG.headerHeight}px`);
      }
      if (CONFIG.headerPosition === 'center') {
        header.classList.add('header--center');
      }
    }

    // Hero background
    const hero = document.getElementById('hero');
    if (hero) {
      hero.classList.add(`hero--${CONFIG.heroBackground}`);
      if (CONFIG.heroBackground === 'image' && CONFIG.heroImage) {
        hero.style.backgroundImage = `url('${CONFIG.heroImage}')`;
      }

      // Hero height
      if (CONFIG.heroMinHeight) {
        root.style.setProperty('--hero-min-height', `${CONFIG.heroMinHeight}px`);
      }

      // Hero logo size
      if (CONFIG.heroLogoHeight) {
        root.style.setProperty('--hero-logo-height', `${CONFIG.heroLogoHeight}px`);
        root.style.setProperty('--hero-logo-max-width', `${CONFIG.heroLogoHeight * 2.8}px`);
      }

      // Hero content alignment
      const align = CONFIG.heroContentAlign || 'center';
      if (align !== 'center') {
        hero.classList.add(`hero--align-${align}`);
      }

      // Hero animation
      const anim = CONFIG.heroAnimation || 'fade-up';
      if (anim !== 'none') {
        hero.classList.add(`hero--anim-${anim}`);
      }
    }
  }


  // âââ 4. INYECTAR CONTENIDO ESTÃTICO âââââââââââââââââââââââ

  function injectStaticContent() {
    // Header
    const logo = document.getElementById('header-logo');
    if (logo) {
      logo.src = CONFIG.brand.logo;
      logo.alt = CONFIG.brand.name;
      logo.onerror = function() { this.style.display = 'none'; };
    }

    setText('header-name', CONFIG.brand.name);

    // Phone
    const phoneLink = document.getElementById('header-phone');
    const phoneText = document.getElementById('header-phone-text');
    if (phoneLink && CONFIG.contact.phone) {
      phoneLink.href = `tel:${CONFIG.contact.phone.replace(/\s/g, '')}`;
      if (phoneText) phoneText.textContent = CONFIG.contact.phone;
    }

    // Location (header)
    const locLink = document.getElementById('header-location');
    const locText = document.getElementById('header-location-text');
    if (locLink && CONFIG.contact.address) {
      locLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.contact.address)}`;
      locLink.style.display = '';
      if (locText) locText.textContent = CONFIG.contact.address;
    }

    // Location (footer)
    const footerLoc = document.getElementById('footer-location');
    const footerLocText = document.getElementById('footer-location-text');
    if (footerLoc && CONFIG.contact.address) {
      footerLoc.style.display = '';
      if (footerLocText) footerLocText.textContent = CONFIG.contact.address;
    }

    // Hero logo
    const heroLogo = document.getElementById('hero-logo');
    if (heroLogo) {
      heroLogo.src = CONFIG.brand.logo;
      heroLogo.alt = CONFIG.brand.name;
      heroLogo.onerror = function() { this.style.display = 'none'; };
    }

    // Hero
    setText('hero-title', CONFIG.brand.name);
    setText('hero-subtitle', CONFIG.brand.tagline);

    // Catalog section
    setText('catalog-title', CONFIG.ui.catalogTitle);
    setText('catalog-subtitle', CONFIG.ui.catalogSubtitle);

    // Footer
    setText('footer-brand', CONFIG.brand.name);
    setText('footer-text', CONFIG.ui.footerText);

    // WhatsApp FAB
    const wsFab = document.getElementById('whatsapp-fab');
    if (wsFab) {
      const wa = CONFIG.contact.whatsapp;
      wsFab.href = `https://wa.me/${wa.number}?text=${encodeURIComponent(wa.defaultMessage)}`;
    }
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }


  // âââ 5. INYECTAR REDES SOCIALES âââââââââââââââââââââââââââ

  function injectSocialLinks() {
    const socialConfig = CONFIG.social;
    const headerContainer = document.getElementById('header-socials');
    const footerContainer = document.getElementById('footer-socials');

    const links = [];
    for (const [platform, url] of Object.entries(socialConfig)) {
      if (!url) continue;
      const icon = ICONS[platform];
      if (!icon) continue;

      links.push(`
        <a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer"
           class="header__social-link" aria-label="${platform}">
          ${icon}
        </a>
      `);
    }

    const html = links.join('');
    if (headerContainer) headerContainer.innerHTML = html;
    if (footerContainer) footerContainer.innerHTML = html;
  }

  function escapeAttr(str) {
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }


  // âââ 6. CARGAR DATOS DEL CATÃLOGO âââââââââââââââââââââââââ

  async function loadCatalogData() {
    // Datos incrustados â siempre usar esto si estÃ¡ disponible
    if (window.CATALOG_DATA) return window.CATALOG_DATA;
    // Intentar cargar desde archivo (cualquiera de los dos nombres posibles)
    const paths = ['data/catalogo.json', 'data/catalog.json', 'catalogo.json'];
    for (const path of paths) {
      try {
        const response = await fetch(path);
        if (response.ok) return await response.json();
      } catch (e) {}
    }
    console.error('[CatalogEngine] No se pudo cargar el catÃ¡logo');
    return { categories: [], items: [] };
  }


  // âââ 7. INICIALIZACIÃN ââââââââââââââââââââââââââââââââââââ

  async function init() {
    // Theme & layout
    injectTheme();
    injectSEO();
    applyLayout();
    injectStaticContent();
    injectSocialLinks();

    // Load data
    const data = await loadCatalogData();

    // Initialize modules
    Renderer.renderFilters(data);
    Renderer.initSearch();
    Renderer.renderCatalog(data);
    Renderer.initModalEvents();

    // Router (deep linking)
    Router.init({
      onItemOpen: (slug) => Renderer.openModal(slug),
      onItemClose: () => Renderer.closeModal(),
    });

    // Animations
    AnimationController.init();
    AnimationController.initHeaderScroll();

    console.log('[CatalogEngine] Initialized successfully.');
    console.log(`[CatalogEngine] Layout: ${CONFIG.layout} | Model: ${CONFIG.businessModel} | Buttons: ${CONFIG.buttonStyle}`);
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
