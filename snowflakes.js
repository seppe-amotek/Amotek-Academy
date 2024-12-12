<script>
  // Number of snowflakes
  const snowflakeCount = 50;

  // Select the section with the snow effect
  const container = document.querySelector('#snow-section');

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

    // Randomize snowflake size and position
    const size = Math.random() * 5 + 1; // Snowflake size between 1vw and 6vw
    const leftIni = Math.random() * 100; // Initial left position (0% to 100%)
    const leftEnd = leftIni + (Math.random() * 20 - 10); // Slight horizontal drift
    const duration = Math.random() * 5 + 5; // Duration between 5s and 10s
    const delay = Math.random() * 10 * -1; // Staggered delays

    // Apply styles using CSS variables
    snowflake.style.setProperty('--left-ini', `${leftIni}vw`);
    snowflake.style.setProperty('--left-end', `${leftEnd}vw`);
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.width = `${size}vw`;
    snowflake.style.height = `${size}vw`;

    // Add snowflake to the container
    container.appendChild(snowflake);
  }
</script>
