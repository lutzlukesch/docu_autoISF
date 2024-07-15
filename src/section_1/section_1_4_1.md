##1.4.1 Dexcom G6 and other 5-minute CGMs

The best proven way to stay out of trouble currently is to use Dexcom G5 or G6, and to ensure via
overlapping right and left arm sensor and transmitter utilization always good quality values, that
can be used by the Full Closed Loop [case study 1.5](../case_studies/case_study_1.5.md).


Other ways (using values from just one G6, or Dexcom ONE, G7, Libre2, or other new AAPS
integrated methods) are possible, but come with a lot of monitoring effort (best via watch), and
occasional time-outs for your FCL.


One safety feature in autoISF is a **blockage of SMB delivery whenever delta bg** (within the last
two 5 minute values) is higher than 30% of that bg (or higher +20%, at bg targets above 100	mg/dl).
<blockquote> Example: From 74 mg/dl, a jump to 97 (+23 mg&dl = + 31% of 74) or more would not
receive SMB “response”. From 100 mg/dl to 131 mg/dl (+31) would neither.</blockquote>


Check in your (HCL or FCL) data whether at meals or sweet drinks with rapid absorbing carbs you
could run into the problem that jumps are “too high” and much needed insulin will be blocked (only
come via very much smaller portions.
<blockquote>For example,400%TBR @ 0.6 U/h => 0.2 U in 5 minutes, instead of one ~3 U SMB. The
difference (of 2.8 U missed) translates @ ISF~ 40 mg/dl/U into up to + 112 mg/dl higher bg
peak! It will not become quite that bad, because the loop will catch up to the
insulinRequired with its next couple of decisions.</blockquote>

Instead searching in old data, you can also just have an eye on instances where you think a first
SMB was due, but blocked. Confirm that (by looking in the SMB tab) and think about a solution that
would not require changing the 30% safety limit in the code.
<blockquote> For instance, not drinking so much juice rapidly around meal start could be a “behavioral”
correction to get rid of the problem.</blockquote>

This blockage (no SMBs) would likely last only 5 minutes (and go probably unnoticed). However,
not only would you lose 5 valuable minutes to get your iob substantially elevated, but also, all
following deltas are likely much smaller. As a consequence, if the >30% delta was in fact (largely)
due to carb absorption, you would, just when needed most, miss some of the boost sought from
bgAccel_ISF.


This example also underscores that the CGM in use cannot be allowed random scatter that leaves
no reasonable room for safe detection of (smaller and) bigger “truly carb related” deltas

If or when (like: first half day of a new sensor) you are not sure about sufficient CGM
performance you might develop for yourself an Automation with User action ticked (along
the lines as used for other purposes in [section 5.2.2.3]() ). It would “ask you” before giving a
SMB whether you really want it delivered. That way you could a) have a look on your
	glucose curve b) .. and on the ai % (underneath Austosens%), which indicates the relative
	aggressiveness of ISF modulation from “what autoISF sees in your bg curve” c) think about
	what sense a SMB now makes with respect to your past meal, and the carbs to be still
	absorbed. Ultimately, you could also d) consult some of the detailed info given (every 5
	minutes) in your SMB tab.
	Such User action Automations need not be active at all times, but if you have it for
	your first half day of a new G6 sensor for instance, you could activate that
	Automation from your list of Automations; after the values have settled in, you can
	de-activate (“shelve”) it again.


For a brief period, and if you are tech savvy, another way to deal with uncertainty about
	CGM would be to employ the emulator method as presented in section 11: Run a “too
	mildly” tuned FCL, and in parallel run a “what-if” with your more aggressive settings that you
	really would like to use once you are certain about your CGM.

However, I found it easiest, to lay a solid groundwork by using 1 Anubis, and two
 overlapping G6, to get rid of most problems (…that I keep seeing in my data, on the worse
sensor of the two that often run for some days in parallel; see case study 1.5).


With a sensible iobTH defined (see section 2.4), and your standard alarms for going towards a
hypo not silenced, the worst consequence from any automatically “over-treated” glucose jump
should be that you need an unplanned snack for the balance of “missing” carbs.
Like you should be used to from anti-hypo snacks also in your Hybrid Closed Looping past, you
might also in this case here prevent SMBs for a short while by setting a (here: odd numbered)
temporary glucose target (TT).

A disturbing and late sign of dealing with a too unreliable CGM (or too aggressive settings) could
	be a trend towards increasing TDD and body weight during your early FCL experience!