# Excellent CGM

You do not give a meal size-related bolus any longer. That leaves all insulination jobs to the
algorithm! Around meals, a stable Bluetooth connectivity is absolutely essential, too, so CGM,
loop, and pump can do their job without losing more valuable time (see case study 1.4).
	As glucose values are the very basis for your autoISF loop, please inform yourself well about your CGM:
- How it principally performs (e.g. you absolutely must be “SMB always-ready” at cob=0) 
Whether you are using the best suited intermediate app that reports the “raw” value from
the CGM transmitter into AAPS

- Specifically, how and where any smoothing is done, and what this might imply for the ISF
boosting method you will be using See for instance here:
https://androidaps.readthedocs.io/en/latest/Usage/Smoothing-Blood-Glucose-Data.html

- Go through your data (in all day and also night times) to see whether your CGM produces
any artefacts (jumpy values; see case study 1.3) that the loop could misinterpret as sign of
a starting meal.

For some of these problems, e.g. “jumps” associated with nighttime compression lows,
there are options to mitigate (see section 5.1.2./3.) . See also the User Action Automation 
`discussed about 2 pages below (line 149ff).`  "link to be added"

- In case your CGM requires calibrations: Note that calibrations often produce jumps. In that
case, be prepared to do, in the future, an extra handling step to protect from your FCL reacting harshly.


autoISF has also a couple of in-built checks on the quality of the recent CGM values. Hence, a
CGM with more scatter will make the loop lose more time, and lead to higher peaks and lower %TIR.
So, if you are unhappy with a slow reaction of your loop it could be because the loop is unhappy with your CGM.
Consult the detail info given (at the time) in your SMB tab, or look it up later in the logfiles 
(using the Emulator, section 10, eventually).





