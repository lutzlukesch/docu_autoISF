# Max and Min autoISF Ratio
preferences/OpenAPS SMB/autoISF settings/autoISF_min and autoISF_max

`For a start, set autoISF_max = 2.0 . `
Your CGM (1 or 5 minute re-calculations) should not matter for this parameter.


This allows up to doubling of ISF aggressiveness if "requested by the “… _ISF_weights" (see

88	section 4). This is just a first step.
89	You may have to elevate autoISF_max further, later, if your attempts to tune the …ISF_weights
90	(section 4.) often run into a limitation by your set autoISF_max
91
92	For situations of increased insulin sensitivity (less insulin need), you must specify, in your settings
93	(preferences) also what your lower limit (for weakening of ISF, compared to profile_ISF) may be.
94
95	autoISF_min should be set to 0.3. Again, see whether you ever run into that limit, that your loop
96	e.g. “would like” to act softer, but bounces against that set limit.
97
98	Do not keep autoISF_min at 0.5 or even higher, because that would for instance preclude
99	later, that your exercise setting can strongly “soften” your loop.
100


