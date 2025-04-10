APPLICATION FORECAST MODEL FOR ASU’S NICHE “FUTURE OF INNOVATION IN SOCIETY” DEGREE
Table of Contents
Introduction

Conceptual Model Overview

Funnel Stages

Model Flow and Equations

Key Model Parameters

Demographics & Growth Rates

Application Behavior

University Choice

Campus “Vibe” & Experience Factors

Program-Level Attractors

Admissions & Yield Factors

Parameter Ranges

Detailed Ranges with Justification

Summary Table

Additional Considerations & Next Steps

1. Introduction
Arizona State University (ASU) is developing and growing a niche Bachelor of Arts degree in the “Future of Innovation in Society.” The program’s focus on forward-thinking, interdisciplinary study sets it apart from mainstream degrees. However, niche degrees often have lower enrollment because they are less well known and compete with more traditional paths. This report outlines a conceptual funnel model to help stakeholders understand potential enrollment and see how different factors (“sliders”) affect the number of prospective applicants — and eventually enrollees.

The model aims to incorporate:

Arizona and national data on high school graduates.

Typical application and enrollment behaviors.

“Vibe” or qualitative factors that influence student choice.

Program-specific attractors (mission alignment, interdisciplinary curriculum).

Ultimately, this framework will be translated into an interactive website where users can tweak key parameters and see how that impacts enrollment predictions for the BA in Future of Innovation in Society.

2. Conceptual Model Overview
2.1. Funnel Stages
We can think of the student pipeline as a funnel, with each stage narrowing the population:

Total High School Graduates (In-State + Out-of-State)
⟹
⟹ Students who are academically eligible for college.

Students Who Apply to University
⟹
⟹ Subset of grads who choose a 4-year institution (vs. no college or 2-year community college).

Choosing Arizona
⟹
⟹ Subset of in-state students staying in Arizona + out-of-state students applying to Arizona.

University Selection
⟹
⟹ Among in-state or out-of-state applicants, the fraction choosing a major AZ public university (ASU, UA, NAU). Then those specifically opting for ASU.

Program Selection
⟹
⟹ Of the ASU applicant pool, a fraction choose the BA in Future of Innovation in Society.

Admissions & Yield
⟹
⟹ Admitted students must still decide to enroll; not all admitted choose to matriculate.

2.2. Model Flow and Equations
A simplified set of equations for the funnel could be written as:

Total In-State Grads
=
𝑋
in-state
Total In-State Grads=X 
in-state
​
 
Total Out-of-State Grads Considering AZ
=
𝑋
OOS
×
𝛽
OOS
Total Out-of-State Grads Considering AZ=X 
OOS
​
 ×β 
OOS
​
 
Total 4-Year Applicants (In-State)
=
𝑋
in-state
×
𝛼
Total 4-Year Applicants (In-State)=X 
in-state
​
 ×α
Those Choosing In-State (for 4-Year)
=
(
Total 4-Year Applicants (In-State)
)
×
𝛽
in
Those Choosing In-State (for 4-Year)=(Total 4-Year Applicants (In-State))×β 
in
​
 
Major AZ University Applicants (In-State)
=
(
Those Choosing In-State (for 4-Year)
)
×
𝛾
Major AZ University Applicants (In-State)=(Those Choosing In-State (for 4-Year))×γ
ASU Applicants (In-State)
=
(
Major AZ Univ Applicants (In-State)
)
×
𝜅
ASU
ASU Applicants (In-State)=(Major AZ Univ Applicants (In-State))×κ 
ASU
​
 
ASU Applicants (Out-of-State)
=
(
𝑋
OOS
×
𝛼
×
𝛽
OOS
)
×
𝛾
OOS
ASU Applicants (Out-of-State)=(X 
OOS
​
 ×α×β 
OOS
​
 )×γ 
OOS
​
 
Total ASU Applicants
=
ASU Applicants (In-State)
+
ASU Applicants (Out-of-State)
Total ASU Applicants=ASU Applicants (In-State)+ASU Applicants (Out-of-State)
Niche Degree Applicants
=
(
Total ASU Applicants
)
×
𝛿
interest
×
𝛿
awareness
×
…
Niche Degree Applicants=(Total ASU Applicants)×δ 
interest
​
 ×δ 
awareness
​
 ×…
(Other “sliders” like 
𝛿
ROI
,
𝛿
mission
,
…
δ 
ROI
​
 ,δ 
mission
​
 ,… can be implemented via a single composite “attractiveness index” or multiple step factors.)

Admitted to Niche Program
=
Niche Degree Applicants
×
𝜙
adm
Admitted to Niche Program=Niche Degree Applicants×ϕ 
adm
​
 
Enrolled (Final)
=
(
Admitted to Niche Program
)
×
𝜃
program
Enrolled (Final)=(Admitted to Niche Program)×θ 
program
​
 
3. Key Model Parameters
Below are the parameters in grouped categories:

3.1. Demographics & Growth Rates
𝑋
in-state
X 
in-state
​
 : Number of Arizona high school graduates each year.

𝑋
OOS
X 
OOS
​
 : Number of out-of-state (U.S.) high school graduates each year.

𝑔
growth
g 
growth
​
 : Annual growth/decline rate in Arizona’s pool of HS graduates.

3.2. Application Behavior
𝛼
α: Fraction of HS grads who apply to 4-year universities.

𝛼
CC
α 
CC
​
 : Fraction who choose community colleges.

𝛽
in
β 
in
​
 : Fraction of in-state (AZ) students choosing an in-state college.

𝛽
out
β 
out
​
 : Fraction of in-state students going out-of-state.

𝛽
OOS
β 
OOS
​
 : Fraction of out-of-state HS grads who consider/apply to Arizona universities.

3.3. University Choice
𝛾
γ: Fraction of in-state 4-year applicants choosing a major public AZ university (ASU, UA, NAU).

𝛾
OOS
γ 
OOS
​
 : Fraction of out-of-state applicants (who choose AZ) opting for ASU over other AZ schools.

𝜅
ASU
κ 
ASU
​
 : Fraction of in-state major-university applicants who pick ASU.

3.4. Campus “Vibe” & Experience Factors
𝑣
campus
v 
campus
​
 : Perceived campus culture rating (qualitative or 1–5 scale).

𝑣
size
v 
size
​
 : Student preference for large vs. small campuses (could be a fraction who prefer large).

𝑣
experience
v 
experience
​
 : Importance placed on research/study abroad opportunities.

𝑣
marketing
v 
marketing
​
 : Influence of program visibility/outreach in general.

3.5. Program-Level Attractors
𝛿
interest
δ 
interest
​
 : Fraction of students open to a future-oriented / socially innovative major.

𝛿
awareness
δ 
awareness
​
 : Awareness of the BA in Future of Innovation in Society.

𝛿
ROI
δ 
ROI
​
 : Perceived ROI vs. a traditional major (can be a 1–10 index or factor).

𝛿
mission
δ 
mission
​
 : Level of alignment with values (environmentalism, equity, etc.).

𝛿
curriculum
δ 
curriculum
​
 : Appeal of interdisciplinary/futures-based curriculum.

𝛿
competition
δ 
competition
​
 : Competitive overlap with similar degrees (sustainability, policy, etc.).

3.6. Admissions & Yield Factors
𝜙
adm
ϕ 
adm
​
 : Admission rate at ASU (and for the niche program if separate).

𝜙
FA
ϕ 
FA
​
 : Level of financial aid/scholarships (could be fraction receiving significant aid).

𝜃
θ: Overall yield rate for ASU.

𝜃
program
θ 
program
​
 : Yield for the specific BA program.

𝑦
visit
y 
visit
​
 : Impact of campus visits (qualitative or factor boosting yield).

𝑦
peer
y 
peer
​
 : Peer/family influence factor.

4. Parameter Ranges
4.1. Detailed Ranges with Justification
4.1.1. Demographics & Growth
𝑋
in-state
X 
in-state
​
 

Range: 65,000–70,000 (annual AZ HS grads around 2025)

Basis: WICHE data, Arizona Department of Education projections.

𝑋
OOS
X 
OOS
​
 

Range: ~3.7–3.8 million (U.S. grads outside Arizona)

Basis: National estimates from NCES for 2024–25.

𝑔
growth
g 
growth
​
 

Range: −1% to +1%

Basis: Arizona graduate counts are near a plateau in mid-2020s; small possible +/- shift.

4.1.2. Application Behavior
𝛼
α (4-year college application rate)

Range (AZ): ~0.25–0.30

Range (National): ~0.45

Basis: ~27% of AZ grads enroll in 4-year (pre-pandemic), ~45% national four-year enrollment.

𝛼
CC
α 
CC
​
  (community college rate)

Range (AZ): 0.20–0.25

Basis: Historically ~25%, but post-COVID dips.

𝛽
in
β 
in
​
  (in-state fraction)

Range: 0.75–0.85

Basis: 70–80% of AZ college-going students remain in-state.

𝛽
out
β 
out
​
  (out-of-state fraction)

Range: 0.15–0.25

Basis: Complement of above.

𝛽
OOS
β 
OOS
​
  (OOS grads applying to AZ)

Range: 1–2%

Basis: Small fraction, given the large national pool vs. actual AZ enrollment.

4.1.3. University Choice
𝛾
γ (in-state choosing major AZ publics)

Range: 0.70–0.80

Basis: 70% of AZ four-year enrollees pick ASU, UA, or NAU.

𝛾
OOS
γ 
OOS
​
  (OOS choosing ASU)

Range: ~0.70 (0.65–0.75)

Basis: ASU’s large share of nonresident AZ enrollments.

𝜅
ASU
κ 
ASU
​
  (in-state picking ASU)

Range: 0.50–0.60

Basis: ASU typically enrolls over half of AZ four-year students among the major publics.

4.1.4. Campus Vibe & Experience
𝑣
campus
v 
campus
​
  (campus culture rating, 1–5 scale)

Range: 4.0–4.5 (generally quite positive among current students)

Basis: Niche and other student satisfaction surveys.

𝑣
size
v 
size
​
  (preference for large campus)

Range: ~50–60% of college-bound students are okay or prefer large universities

Basis: Surveys citing availability of majors, big-campus experience.

𝑣
experience
v 
experience
​
  (importance of research/study abroad)

Range: High importance for ~50%+ of prospective students

Basis: National data on how “experiential learning” influences choice.

𝑣
marketing
v 
marketing
​
  (program visibility/outreach effect)

Qualitative: Low currently but can be scaled up substantially.

Basis: Program is niche; marketing can double or triple awareness.

4.1.5. Program-Level Attractors
𝛿
interest
δ 
interest
​
  (interest in futures/social innovation)

Range: 5–15% of total college-bound students

Basis: Best guess from analogous niche fields, generational interest in social impact.

𝛿
awareness
δ 
awareness
​
  (awareness of this program)

Range: <5% currently (very low)

Basis: Program is new; awareness can expand with targeted marketing.

𝛿
ROI
δ 
ROI
​
  (perceived ROI, scale 1–10)

Range: 5–7 out of 10 (moderate to uncertain)

Basis: Unclear job path reduces perceived ROI vs. known majors.

𝛿
mission
δ 
mission
​
  (value alignment, 1–10)

Range: 8–10 for the subset that strongly cares, but that subset is maybe ~10–20%

Basis: Gen Z’s high concern for environment/social issues.

𝛿
curriculum
δ 
curriculum
​
  (appeal of interdisciplinary approach, 1–10)

Range: 6–8 for a niche audience; lower for mainstream.

Basis: Some love the breadth; others want a more traditional path.

𝛿
competition
δ 
competition
​
  (competition from similar degrees)

Qualitative: Moderate to high.

Basis: Overlap with sustainability, policy, etc. could fragment interest.

4.1.6. Admissions & Yield
𝜙
adm
ϕ 
adm
​
  (ASU admission rate)

Range: 0.85–0.90

Basis: ASU typically admits ~85–90% of applicants.

𝜙
FA
ϕ 
FA
​
  (financial aid coverage)

Range: 80–90% receiving some aid; coverage from 10–100% of tuition.

Basis: High proportion of ASU undergrads receive scholarships or grants.

𝜃
θ (overall ASU yield)

Range: 0.20–0.30

Basis: Large applicant pool, only about 1 in 4 admitted students enroll.

𝜃
program
θ 
program
​
  (niche program yield)

Range: 0.30–0.50

Basis: Potentially higher than overall ASU if applicants are self-selected for mission fit.

𝑦
visit
y 
visit
​
  (impact of campus visits)

Qualitative: Visiting can double or triple enrollment likelihood.

Basis: Common knowledge that campus tours significantly boost yield.

𝑦
peer
y 
peer
​
  (peer/family influence)

Qualitative: High influence, ~50% cite parents as a main factor.

Basis: Surveys on parental guidance & friend influence.

4.2. Summary Table
Parameter	Range/Est. Value	Notes
X_in-state	65k–70k	AZ HS grads (2025)
X_OOS	3.7M–3.8M	Non-AZ U.S. grads (2025)
g_growth	−1% to +1%	AZ graduate growth rate (flat)
α (AZ)	0.25–0.30	Fraction applying to 4-year college
α_CC (AZ)	0.20–0.25	Fraction choosing 2-year CC
β_in	0.75–0.85	Fraction of AZ 4-year students staying in-state
β_out	0.15–0.25	Fraction leaving AZ
β_OOS	~1–2%	OOS grads applying to AZ unis
γ	0.70–0.80	In-state 4-year choosing a major AZ public uni
γ_OOS	0.65–0.75	OOS choosing ASU vs. other AZ publics
κ_ASU	0.50–0.60	In-state public uni applicants choosing ASU
v_campus	4.0–4.5 (scale 1–5)	Campus vibe rating
v_size	50–60% (prefer large)	Student preference for large campus
v_experience	~50%+ assign high importance	Research/study abroad value
v_marketing	Qualitative (low → high)	Program visibility effect
δ_interest	5–15%	Interested in future/soc innovation
δ_awareness	<5% currently	Aware of this specific program
δ_ROI	5–7 (scale 1–10)	Perceived ROI
δ_mission	High (8–10) for ~10–20% of students	Values alignment potential
δ_curriculum	6–8 (scale 1–10)	Appeal of interdisciplinary approach
δ_competition	Moderate to high	Overlap with Sustainability, Policy, etc.
φ_adm	0.85–0.90	Overall ASU acceptance rate
φ_FA	80–90% receiving some aid	Financial aid prevalence
θ	0.20–0.30	Overall ASU yield
θ_program	0.30–0.50	Potential yield for niche BA
y_visit	High impact	Visits often double/triple likelihood
y_peer	High influence	Parents & peers pivotal in final decision
5. Additional Considerations & Next Steps
Model Implementation:

Dashboard: Each parameter becomes an adjustable slider (range or discrete steps).

Output: Real-time calculation of projected applicants and enrolled students.

Correlations:

Some parameters are interrelated (e.g., high v_experience might correlate with δ_interest). A more advanced model could incorporate correlation logic or weighting.

Marketing Scenarios:

Because awareness is currently low, parameter “v_marketing” or “δ_awareness” can shift drastically. The model can show how improved marketing campaigns could increase the applicant pool.

Validation:

This initial model is based on the best available data and estimates. Once built, you can compare predictions to actual enrollment data.

Long-Term Projections:

The model can be extended with year-over-year changes in high school grads, changes in tuition or financial aid policies, or new marketing initiatives.

Conclusion
This report provides both the conceptual foundation and the granular data inputs for an Application Forecast Model specific to Arizona State University’s niche BA in the Future of Innovation in Society. By systematically tracking the funnel from total high school graduates to final enrollment and identifying the key “sliders,” the model allows the university to:

Understand realistic enrollment potential under different assumptions (e.g., improved marketing, changed financial aid, increased national interest in sustainability).

Identify bottlenecks (e.g., low awareness, concerns about ROI).

Develop strategies to boost interest and yield.

When translated into an interactive website, stakeholders can explore scenarios in real time. For example, raising the “awareness” slider from 5% to 20% drastically increases projected applicants, demonstrating the power of targeted outreach. Similarly, toggling the fraction of out-of-state applicants (β_OOS) can illustrate the potential gains of broader national recruitment.

In short, the model not only projects numbers but also reveals strategic levers for enrollment growth in this novel, future-focused degree.
