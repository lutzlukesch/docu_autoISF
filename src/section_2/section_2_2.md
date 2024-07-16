#  2.2 Max and Min autoISF Ratio
preferences/OpenAPS SMB/autoISF settings/autoISF_min and autoISF_max

`For a start, set autoISF_max = 2.0 . `
Your CGM (1 or 5 minute re-calculations) should not matter for this parameter.


This allows up to doubling of ISF aggressiveness if "requested by the “… _ISF_weights" (see
section 4). This is just a first step.

You may have to elevate autoISF_max further, later, if your attempts to tune the …ISF_weights
(section 4.) often run into a limitation by your set autoISF_max

For situations of increased insulin sensitivity (less insulin need), you must specify, in your settings
(preferences) also what your lower limit (for weakening of ISF, compared to profile_ISF) may be.

autoISF_min should be set to 0.3. Again, see whether you ever run into that limit, that your loop
e.g. “would like” to act softer, but bounces against that set limit.

<Textbox width="100"> Do not keep autoISF_min at 0.5 or even higher, because that would for instance preclude
later, that your exercise setting can strongly “soften” your loop. </Textbox>





