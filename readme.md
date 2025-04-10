REPORT: APPLICATION FORECAST MODEL FOR ASU’S NICHE “FUTURE OF INNOVATION IN SOCIETY” DEGREE
Table of Contents
1.	Introduction
2.	Conceptual Model Overview
1.	Funnel Stages
2.	Model Flow and Equations
3.	Key Model Parameters
1.	Demographics & Growth Rates
2.	Application Behavior
3.	University Choice
4.	Campus “Vibe” & Experience Factors
5.	Program-Level Attractors
6.	Admissions & Yield Factors
4.	Parameter Ranges
1.	Detailed Ranges with Justification
2.	Summary Table
5.	Additional Considerations & Next Steps
 
1. Introduction
Arizona State University (ASU) is developing and growing a niche Bachelor of Arts degree in the “Future of Innovation in Society.” The program’s focus on forward-thinking, interdisciplinary study sets it apart from mainstream degrees. However, niche degrees often have lower enrollment because they are less well known and compete with more traditional paths. This report outlines a conceptual funnel model to help stakeholders understand potential enrollment and see how different factors (“sliders”) affect the number of prospective applicants — and eventually enrollees.
The model aims to incorporate:
•	Arizona and national data on high school graduates.
•	Typical application and enrollment behaviors.
•	“Vibe” or qualitative factors that influence student choice.
•	Program-specific attractors (mission alignment, interdisciplinary curriculum).
Ultimately, this framework will be translated into an interactive website where users can tweak key parameters and see how that impacts enrollment predictions for the BA in Future of Innovation in Society.
________________________________________
2. Conceptual Model Overview
2.1. Funnel Stages
We can think of the student pipeline as a funnel, with each stage narrowing the population:
1.	Total High School Graduates (In-State + Out-of-State)
⟹\Longrightarrow⟹ Students who are academically eligible for college.
2.	Students Who Apply to University
⟹\Longrightarrow⟹ Subset of grads who choose a 4-year institution (vs. no college or 2-year community college).
3.	Choosing Arizona
⟹\Longrightarrow⟹ Subset of in-state students staying in Arizona + out-of-state students applying to Arizona.
4.	University Selection
⟹\Longrightarrow⟹ Among in-state or out-of-state applicants, the fraction choosing a major AZ public university (ASU, UA, NAU). Then those specifically opting for ASU.
5.	Program Selection
⟹\Longrightarrow⟹ Of the ASU applicant pool, a fraction choose the BA in Future of Innovation in Society.
6.	Admissions & Yield
⟹\Longrightarrow⟹ Admitted students must still decide to enroll; not all admitted choose to matriculate.
2.2. Model Flow and Equations
A simplified set of equations for the funnel could be written as:
Total In-State Grads=Xin-state\text{Total In-State Grads} = X_{\text{in-state}}Total In-State Grads=Xin-state Total Out-of-State Grads Considering AZ=XOOS×βOOS\text{Total Out-of-State Grads Considering AZ} = X_{\text{OOS}} \times \beta_{\text{OOS}}Total Out-of-State Grads Considering AZ=XOOS×βOOS Total 4-Year Applicants (In-State)=Xin-state×α\text{Total 4-Year Applicants (In-State)} = X_{\text{in-state}} \times \alphaTotal 4-Year Applicants (In-State)=Xin-state×α Those Choosing In-State (for 4-Year)=(Total 4-Year Applicants (In-State))×βin\text{Those Choosing In-State (for 4-Year)} = (\text{Total 4-Year Applicants (In-State)}) \times \beta_{\text{in}}Those Choosing In-State (for 4-Year)=(Total 4-Year Applicants (In-State))×βin Major AZ University Applicants (In-State)=(Those Choosing In-State (for 4-Year))×γ\text{Major AZ University Applicants (In-State)} = (\text{Those Choosing In-State (for 4-Year)}) \times \gammaMajor AZ University Applicants (In-State)=(Those Choosing In-State (for 4-Year))×γ ASU Applicants (In-State)=(Major AZ Univ Applicants (In-State))×κASU\text{ASU Applicants (In-State)} = (\text{Major AZ Univ Applicants (In-State)}) \times \kappa_{\text{ASU}}ASU Applicants (In-State)=(Major AZ Univ Applicants (In-State))×κASU ASU Applicants (Out-of-State)=(XOOS×α×βOOS)×γOOS\text{ASU Applicants (Out-of-State)} = (X_{\text{OOS}} \times \alpha \times \beta_{\text{OOS}}) \times \gamma_{\text{OOS}}ASU Applicants (Out-of-State)=(XOOS×α×βOOS)×γOOS Total ASU Applicants=ASU Applicants (In-State)+ASU Applicants (Out-of-State)\text{Total ASU Applicants} = \text{ASU Applicants (In-State)} + \text{ASU Applicants (Out-of-State)}Total ASU Applicants=ASU Applicants (In-State)+ASU Applicants (Out-of-State) Niche Degree Applicants=(Total ASU Applicants)×δinterest×δawareness×…\text{Niche Degree Applicants} = (\text{Total ASU Applicants}) \times \delta_{\text{interest}} \times \delta_{\text{awareness}} \times \dotsNiche Degree Applicants=(Total ASU Applicants)×δinterest×δawareness×… 
(Other “sliders” like δROI,δmission,…\delta_{\text{ROI}}, \delta_{\text{mission}}, \ldotsδROI,δmission,… can be implemented via a single composite “attractiveness index” or multiple step factors.)
Admitted to Niche Program=Niche Degree Applicants×ϕadm\text{Admitted to Niche Program} = \text{Niche Degree Applicants} \times \phi_{\text{adm}}Admitted to Niche Program=Niche Degree Applicants×ϕadm Enrolled (Final)=(Admitted to Niche Program)×θprogram\text{Enrolled (Final)} = (\text{Admitted to Niche Program}) \times \theta_{\text{program}}Enrolled (Final)=(Admitted to Niche Program)×θprogram 
________________________________________
3. Key Model Parameters
Below are the parameters in grouped categories:
3.1. Demographics & Growth Rates
1.	Xin-stateX_{\text{in-state}}Xin-state: Number of Arizona high school graduates each year.
2.	XOOSX_{\text{OOS}}XOOS: Number of out-of-state (U.S.) high school graduates each year.
3.	ggrowthg_{\text{growth}}ggrowth: Annual growth/decline rate in Arizona’s pool of HS graduates.
3.2. Application Behavior
4.	α\alphaα: Fraction of HS grads who apply to 4-year universities.
5.	αCC\alpha_{\text{CC}}αCC: Fraction who choose community colleges.
6.	βin\beta_{\text{in}}βin: Fraction of in-state (AZ) students choosing an in-state college.
7.	βout\beta_{\text{out}}βout: Fraction of in-state students going out-of-state.
8.	βOOS\beta_{\text{OOS}}βOOS: Fraction of out-of-state HS grads who consider/apply to Arizona universities.
3.3. University Choice
9.	γ\gammaγ: Fraction of in-state 4-year applicants choosing a major public AZ university (ASU, UA, NAU).
10.	γOOS\gamma_{\text{OOS}}γOOS: Fraction of out-of-state applicants (who choose AZ) opting for ASU over other AZ schools.
11.	κASU\kappa_{\text{ASU}}κASU: Fraction of in-state major-university applicants who pick ASU.
3.4. Campus “Vibe” & Experience Factors
12.	vcampusv_{\text{campus}}vcampus: Perceived campus culture rating (qualitative or 1–5 scale).
13.	vsizev_{\text{size}}vsize: Student preference for large vs. small campuses (could be a fraction who prefer large).
14.	vexperiencev_{\text{experience}}vexperience: Importance placed on research/study abroad opportunities.
15.	vmarketingv_{\text{marketing}}vmarketing: Influence of program visibility/outreach in general.
3.5. Program-Level Attractors
16.	δinterest\delta_{\text{interest}}δinterest: Fraction of students open to a future-oriented / socially innovative major.
17.	δawareness\delta_{\text{awareness}}δawareness: Awareness of the BA in Future of Innovation in Society.
18.	δROI\delta_{\text{ROI}}δROI: Perceived ROI vs. a traditional major (can be a 1–10 index or factor).
19.	δmission\delta_{\text{mission}}δmission: Level of alignment with values (environmentalism, equity, etc.).
20.	δcurriculum\delta_{\text{curriculum}}δcurriculum: Appeal of interdisciplinary/futures-based curriculum.
21.	δcompetition\delta_{\text{competition}}δcompetition: Competitive overlap with similar degrees (sustainability, policy, etc.).
3.6. Admissions & Yield Factors
22.	ϕadm\phi_{\text{adm}}ϕadm: Admission rate at ASU (and for the niche program if separate).
23.	ϕFA\phi_{\text{FA}}ϕFA: Level of financial aid/scholarships (could be fraction receiving significant aid).
24.	θ\thetaθ: Overall yield rate for ASU.
25.	θprogram\theta_{\text{program}}θprogram: Yield for the specific BA program.
26.	yvisity_{\text{visit}}yvisit: Impact of campus visits (qualitative or factor boosting yield).
27.	ypeery_{\text{peer}}ypeer: Peer/family influence factor.
________________________________________
4. Parameter Ranges
4.1. Detailed Ranges with Justification
4.1.1. Demographics & Growth
1.	Xin-stateX_{\text{in-state}}Xin-state
o	Range: 65,000–70,000 (annual AZ HS grads around 2025)
o	Basis: WICHE data, Arizona Department of Education projections.
2.	XOOSX_{\text{OOS}}XOOS
o	Range: ~3.7–3.8 million (U.S. grads outside Arizona)
o	Basis: National estimates from NCES for 2024–25.
3.	ggrowthg_{\text{growth}}ggrowth
o	Range: −1% to +1%
o	Basis: Arizona graduate counts are near a plateau in mid-2020s; small possible +/- shift.
4.1.2. Application Behavior
4.	α\alphaα (4-year college application rate)
o	Range (AZ): ~0.25–0.30
o	Range (National): ~0.45
o	Basis: ~27% of AZ grads enroll in 4-year (pre-pandemic), ~45% national four-year enrollment.
5.	αCC\alpha_{\text{CC}}αCC (community college rate)
o	Range (AZ): 0.20–0.25
o	Basis: Historically ~25%, but post-COVID dips.
6.	βin\beta_{\text{in}}βin (in-state fraction)
o	Range: 0.75–0.85
o	Basis: 70–80% of AZ college-going students remain in-state.
7.	βout\beta_{\text{out}}βout (out-of-state fraction)
o	Range: 0.15–0.25
o	Basis: Complement of above.
8.	βOOS\beta_{\text{OOS}}βOOS (OOS grads applying to AZ)
o	Range: 1–2%
o	Basis: Small fraction, given the large national pool vs. actual AZ enrollment.
4.1.3. University Choice
9.	γ\gammaγ (in-state choosing major AZ publics)
o	Range: 0.70–0.80
o	Basis: 70% of AZ four-year enrollees pick ASU, UA, or NAU.
10.	γOOS\gamma_{\text{OOS}}γOOS (OOS choosing ASU)
•	Range: ~0.70 (0.65–0.75)
•	Basis: ASU’s large share of nonresident AZ enrollments.
11.	κASU\kappa_{\text{ASU}}κASU (in-state picking ASU)
•	Range: 0.50–0.60
•	Basis: ASU typically enrolls over half of AZ four-year students among the major publics.
4.1.4. Campus Vibe & Experience
12.	vcampusv_{\text{campus}}vcampus (campus culture rating, 1–5 scale)
•	Range: 4.0–4.5 (generally quite positive among current students)
•	Basis: Niche and other student satisfaction surveys.
13.	vsizev_{\text{size}}vsize (preference for large campus)
•	Range: ~50–60% of college-bound students are okay or prefer large universities
•	Basis: Surveys citing availability of majors, big-campus experience.
14.	vexperiencev_{\text{experience}}vexperience (importance of research/study abroad)
•	Range: High importance for ~50%+ of prospective students
•	Basis: National data on how “experiential learning” influences choice.
15.	vmarketingv_{\text{marketing}}vmarketing (program visibility/outreach effect)
•	Qualitative: Low currently but can be scaled up substantially.
•	Basis: Program is niche; marketing can double or triple awareness.
4.1.5. Program-Level Attractors
16.	δinterest\delta_{\text{interest}}δinterest (interest in futures/social innovation)
•	Range: 5–15% of total college-bound students
•	Basis: Best guess from analogous niche fields, generational interest in social impact.
17.	δawareness\delta_{\text{awareness}}δawareness (awareness of this program)
•	Range: <5% currently (very low)
•	Basis: Program is new; awareness can expand with targeted marketing.
18.	δROI\delta_{\text{ROI}}δROI (perceived ROI, scale 1–10)
•	Range: 5–7 out of 10 (moderate to uncertain)
•	Basis: Unclear job path reduces perceived ROI vs. known majors.
19.	δmission\delta_{\text{mission}}δmission (value alignment, 1–10)
•	Range: 8–10 for the subset that strongly cares, but that subset is maybe ~10–20%
•	Basis: Gen Z’s high concern for environment/social issues.
20.	δcurriculum\delta_{\text{curriculum}}δcurriculum (appeal of interdisciplinary approach, 1–10)
•	Range: 6–8 for a niche audience; lower for mainstream.
•	Basis: Some love the breadth; others want a more traditional path.
21.	δcompetition\delta_{\text{competition}}δcompetition (competition from similar degrees)
•	Qualitative: Moderate to high.
•	Basis: Overlap with sustainability, policy, etc. could fragment interest.
4.1.6. Admissions & Yield
22.	ϕadm\phi_{\text{adm}}ϕadm (ASU admission rate)
•	Range: 0.85–0.90
•	Basis: ASU typically admits ~85–90% of applicants.
23.	ϕFA\phi_{\text{FA}}ϕFA (financial aid coverage)
•	Range: 80–90% receiving some aid; coverage from 10–100% of tuition.
•	Basis: High proportion of ASU undergrads receive scholarships or grants.
24.	θ\thetaθ (overall ASU yield)
•	Range: 0.20–0.30
•	Basis: Large applicant pool, only about 1 in 4 admitted students enroll.
25.	θprogram\theta_{\text{program}}θprogram (niche program yield)
•	Range: 0.30–0.50
•	Basis: Potentially higher than overall ASU if applicants are self-selected for mission fit.
26.	yvisity_{\text{visit}}yvisit (impact of campus visits)
•	Qualitative: Visiting can double or triple enrollment likelihood.
•	Basis: Common knowledge that campus tours significantly boost yield.
27.	ypeery_{\text{peer}}ypeer (peer/family influence)
•	Qualitative: High influence, ~50% cite parents as a main factor.
•	Basis: Surveys on parental guidance & friend influence.
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
1.	Model Implementation:
o	Dashboard: Each parameter becomes an adjustable slider (range or discrete steps).
o	Output: Real-time calculation of projected applicants and enrolled students.
2.	Correlations:
o	Some parameters are interrelated (e.g., high v_experience might correlate with δ_interest). A more advanced model could incorporate correlation logic or weighting.
3.	Marketing Scenarios:
o	Because awareness is currently low, parameter “v_marketing” or “δ_awareness” can shift drastically. The model can show how improved marketing campaigns could increase the applicant pool.
4.	Validation:
o	This initial model is based on the best available data and estimates. Once built, you can compare predictions to actual enrollment data.
5.	Long-Term Projections:
o	The model can be extended with year-over-year changes in high school grads, changes in tuition or financial aid policies, or new marketing initiatives.
 
Conclusion
This report provides both the conceptual foundation and the granular data inputs for an Application Forecast Model specific to Arizona State University’s niche BA in the Future of Innovation in Society. By systematically tracking the funnel from total high school graduates to final enrollment and identifying the key “sliders,” the model allows the university to:
1.	Understand realistic enrollment potential under different assumptions (e.g., improved marketing, changed financial aid, increased national interest in sustainability).
2.	Identify bottlenecks (e.g., low awareness, concerns about ROI).
3.	Develop strategies to boost interest and yield.
When translated into an interactive website, stakeholders can explore scenarios in real time. For example, raising the “awareness” slider from 5% to 20% drastically increases projected applicants, demonstrating the power of targeted outreach. Similarly, toggling the fraction of out-of-state applicants (β_OOS) can illustrate the potential gains of broader national recruitment.
In short, the model not only projects numbers but also reveals strategic levers for enrollment growth in this novel, future-focused degree.

![image](https://github.com/user-attachments/assets/dd33b2ed-6733-463d-bd01-43ba42120778)
