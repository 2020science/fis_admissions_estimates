/*********************************************
 * ASU Future of Innovation Enrollment Model
 *
 * This script calculates the projected final enrollment
 * for the BA in Future of Innovation in Society program
 * using a funnel model that aggregates factors from:
 *  1. Demographics & Growth,
 *  2. Application Behavior,
 *  3. University Choice,
 *  4. Program-Level Attractors, and
 *  5. Admissions & Yield.
 *
 * It also updates a report box at the top with both the
 * overall projected enrollment and a detailed breakdown
 * of key steps in the funnel.
 *********************************************/

/* -----------------------------------------
   Helper Function: updateValue
   - Updates the display value for a given slider.
   - If the value is fractional (less than 1), it is shown as a percentage.
   ----------------------------------------- */
function updateValue(sliderId, displayId) {
  const slider = document.getElementById(sliderId);
  const display = document.getElementById(displayId);
  let val = parseFloat(slider.value);
  
  if (val < 1.0) {
    display.textContent = (val * 100).toFixed(1) + '%';
  } else if (val > 1000) {
    display.textContent = val.toFixed(0);
  } else {
    display.textContent = val.toFixed(1);
  }
}

/* -----------------------------------------
   Main Function: updateModel
   - Reads slider values,
   - Computes the enrollment funnel in several steps,
   - Updates the overall projected enrollment and
     provides a breakdown of key steps in the report box.
   ----------------------------------------- */
function updateModel() {
  // --- 1. Demographics & Growth ---
  const X_instate = parseInt(document.getElementById('X_instate').value);   // AZ HS grads per year
  const X_OOS = parseInt(document.getElementById('X_OOS').value);           // Non-AZ HS grads per year
  const g_growth = parseFloat(document.getElementById('g_growth').value);     // Growth rate in AZ grads
  const effectiveX_instate = X_instate * (1 + g_growth);                      // Adjusted AZ grad count
  
  // --- 2. Application Behavior ---
  const alpha = parseFloat(document.getElementById('alpha').value);           // Fraction applying to 4-year colleges (AZ)
  const beta_in = parseFloat(document.getElementById('beta_in').value);       // Fraction of in-state applicants staying in AZ
  const beta_OOS = parseFloat(document.getElementById('beta_OOS').value);     // Fraction of non-AZ grads applying to AZ
  
  // --- 3. University Choice ---
  const gamma = parseFloat(document.getElementById('gamma').value);           // Fraction of in-state applicants choosing major AZ univs
  const gamma_OOS = parseFloat(document.getElementById('gamma_OOS').value);     // Fraction of non-AZ applicants (applying to AZ) choosing ASU
  const k_ASU = parseFloat(document.getElementById('k_ASU').value);             // Fraction of in-state major univ applicants selecting ASU
  
  // --- 4. Program-Level Attractors ---
  const delta_interest = parseFloat(document.getElementById('delta_interest').value);   // Interest in social innovation
  const delta_awareness = parseFloat(document.getElementById('delta_awareness').value); // Awareness of the program
  const delta_ROI = parseFloat(document.getElementById('delta_ROI').value);             // Perceived ROI (scale 1-10)
  const delta_mission = parseFloat(document.getElementById('delta_mission').value);     // Mission alignment (scale 1-10)
  const delta_curriculum = parseFloat(document.getElementById('delta_curriculum').value); // Curriculum appeal (scale 1-10)
  const delta_market = parseFloat(document.getElementById('delta_market').value);// Maximum program market for a niche program (at ASU combined niche programs only attract 1% - 2% of freshmen)  (0-5%)
  const delta_secretsauce = parseFloat(document.getElementById('delta_secretsauce').value);// Wildcard factor to incorporate FIS' 'secret sauce' (0-2%)

  
  // Composite program factor: combine attractors with normalization.
  const programFactor = delta_market * delta_interest * delta_awareness *
    (delta_ROI / 10) * (delta_mission / 10) * (delta_curriculum / 10) * ((delta_secretsauce + 0.01) * 100);
  
  // --- 5. Admissions & Yield ---
  const phi_adm = parseFloat(document.getElementById('phi_adm').value);       // ASU admission rate
  const phi_FA = parseFloat(document.getElementById('phi_FA').value);         // Financial aid coverage -- not used in calculation
  const theta = parseFloat(document.getElementById('theta').value);           // Overall yield rate at ASU
  const theta_program = parseFloat(document.getElementById('theta_program').value);// Niche program yield rate
  const y_visit = parseFloat(document.getElementById('y_visit').value);       // Multiplier from campus visits
  const y_peer = parseFloat(document.getElementById('y_peer').value);         // Multiplier from peer/family influence
  
  // --- In-State Funnel ---
  const step1_in = effectiveX_instate * alpha;     // AZ grads applying to 4-year colleges
  const step2_in = step1_in * beta_in;               // In-state applicants remaining in AZ
  const step3_in = step2_in * gamma;                 // Applicants choosing a major AZ public university
  const step4_in = step3_in * k_ASU;                 // Those selecting ASU
  
  // --- Out-of-State Funnel ---
  const step1_os = X_OOS * 0.45;                     // Non-AZ grads applying to 4-year colleges (assumed 45% rate)
  const step2_os = step1_os * beta_OOS;              // Out-of-state grads applying to AZ unis
  const step3_os = step2_os * gamma_OOS;             // Among these, choosing ASU
  
  // --- Estimated ASU undergraduate enrollment (checks and balances) ---
  const final_in_total = step4_in * phi_adm * theta * y_visit * y_peer;  // In-state  program admissions
  const final_os_total = step3_os * phi_adm * theta * y_visit * y_peer;  // Out of state  program admissions
  const finalEnrollment_total = final_in_total + final_os_total;  // Final projected enrollment (all undergrad)
  const finalnicheEnrollment_total = finalEnrollment_total * delta_market; //Estimated pool of students for all niche majors

  
  // --- Program Application Adjustment ---
  const niche_in = step4_in * programFactor;  // In-state niche program applicants
  const niche_os = step3_os * programFactor;  // Out-of-state niche program applicants
  
  // --- Apply Admissions & Yield Multipliers ---
  const final_in = niche_in * phi_adm * theta * theta_program * y_visit * y_peer;
  const final_os = niche_os * phi_adm * theta * theta_program * y_visit * y_peer;
  const finalEnrollment = final_in + final_os;  // Final projected enrollment
  
  // Update the overall report.
  document.getElementById('enrollmentResult').textContent =
    finalEnrollment.toFixed(0) + ' students per year (approx.)';
  
  // Build a breakdown of key funnel numbers.
  let breakdownHTML = '<h3>Funnel Breakdown:</h3><ul>';
  breakdownHTML += '<li><strong>In-state students applying to ASU :</strong> ' + step4_in.toFixed(0) + '</li>';
  breakdownHTML += '<li><strong>Out of state students applying to ASU :</strong> ' + step3_os.toFixed(0) + '</li>';
  breakdownHTML += '<li><strong>Estimated total freshmen enrollment at ASU (for calibration. ~17,000 freshmen in 2024):</strong> ' + finalEnrollment_total.toFixed(0) + '</li>';
  breakdownHTML += '<li><strong>Estimated number of freshmen enrolling in niche majors :</strong> ' + finalnicheEnrollment_total.toFixed(0) + '</li>';
  breakdownHTML += '<li><strong>In-state students who will potentially apply to a niche program like FIS:</strong> ' + niche_in.toFixed(0) + '</li>';
  breakdownHTML += '<li><strong>Out of state students who will potentially apply to a niche program like FIS:</strong> ' + niche_os.toFixed(0) + '</li>';
  breakdownHTML += '<li><strong>Estimated in-state FIS admissions :</strong> ' + final_in.toFixed(0) + '</li>';
  breakdownHTML += '<li><strong>Estimated out of state FIS admissions :</strong> ' + final_os.toFixed(0) + '</li>';
  breakdownHTML += '<li><strong>Estimated final enrollment (In-State + Out of state):</strong> ' + finalEnrollment.toFixed(0) + '</li>';
  breakdownHTML += '</ul>';
  
  document.getElementById('reportBreakdown').innerHTML = breakdownHTML;
}

// --- Initialization ---
// When the page loads, update the slider display values and run the initial calculation.
window.onload = () => {
  const sliderIds = [
    'X_instate', 'X_OOS', 'g_growth',
    'alpha', 'beta_in', 'beta_OOS',
    'gamma', 'gamma_OOS', 'k_ASU',
    'delta_interest', 'delta_awareness', 'delta_ROI',
    'delta_mission', 'delta_curriculum', 'delta_market', 'delta_secretsauce',
    'phi_adm', 'phi_FA', 'theta', 'theta_program',
    'y_visit', 'y_peer'
  ];
  
  sliderIds.forEach(id => {
    updateValue(id, id + 'Value');
  });
  
  updateModel();
};
