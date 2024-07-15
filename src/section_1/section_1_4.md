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


102	autoISF has also a couple of in-built checks on the quality of the recent CGM values. Hence, a
103	CGM with more scatter will make the loop lose more time, and lead to higher peaks and
104	lower %TIR.
105
106	So, if you are unhappy with a slow reaction of your loop it could be because the loop is
107	unhappy with your CGM.
108	Consult the detail info given (at the time) in your SMB tab, or look it up later in the logfiles (using
109	the Emulator, section 10, eventually).
110
111

112	1.4.1 Dexcom G6 and other 5-minute CGMs
113
114	The best proven way to stay out of trouble currently is to use Dexcom G5 or G6, and to ensure via
115	overlapping right and left arm sensor and transmitter utilization always good quality values, that
116	can be used by the Full Closed Loop (case study 1.5).
117
118	Other ways (using values from just one G6, or Dexcom ONE, G7, Libre2, or other new AAPS
119	integrated methods) are possible, but come with a lot of monitoring effort (best via watch), and
120	occasional time-outs for your FCL.
121
122	One safety feature in autoISF is a blockage of SMB delivery whenever delta bg (within the last
123	two 5 minute values) is higher than 30% of that bg (or higher +20%, at bg targets above 100
124	mg/dl).
125	Example: From 74 mg/dl, a jump to 97 (+23 mg&dl = + 31% of 74) or more would not
126	receive SMB “response”. From 100 mg/dl to 131 mg/dl (+31) would neither.
127
128	Check in your (HCL or FCL) data whether at meals or sweet drinks with rapid absorbing carbs you
129	could run into the problem that jumps are “too high” and much needed insulin will be blocked (only
130	come via very much smaller portions.
131	For example,400%TBR @ 0.6 U/h => 0.2 U in 5 minutes, instead of one ~3 U SMB. The
132	difference (of 2.8 U missed) translates @ ISF~ 40 mg/dl/U into up to + 112 mg/dl higher bg
133	peak! It will not become quite that bad, because the loop will catch up to the
134	insulinRequired with its next couple of decisions.
135
136	Instead searching in old data, you can also just have an eye on instances where you think a first
137	SMB was due, but blocked. Confirm that (by looking in the SMB tab) and think about a solution that
138	would not require changing the 30% safety limit in the code.
139	For instance, not drinking so much juice rapidly around meal start could be a “behavioral”
140	correction to get rid of the problem.
141
142	This blockage (no SMBs) would likely last only 5 minutes (and go probably unnoticed). However,
143	not only would you lose 5 valueable minutes to get your iob substantially elevated, but also, all
144	following deltas are likely much smaller. As a consequence, if the >30% delta was in fact (largely)
145	due to carb absorption, you would, just when needed most, miss some of the boost sought from
146	bgAccel_ISF.
147
148	This example also underscores that the CGM in use cannot be allowed random scatter that leaves
149	no reasonable room for safe detection of (smaller and) bigger “truly carb related” deltas

150
151	If or when (like: first half day of a new sensor) you are not sure about sufficient CGM
152	performance you might develop for yourself an Automation with User action ticked (along
153	the lines as used for other purposes in section 5.2.2.3). It would “ask you” before giving a
154	SMB whether you really want it delivered. That way you could a) have a look on your
155	glucose curve b) .. and on the ai % (underneath Austosens%), which indicates the relative
156	aggressiveness of ISF modulation from “what autoISF sees in your bg curve” c) think about
157	what sense a SMB now makes with respect to your past meal, and the carbs to be still
158	absorbed. Ultimately, you could also d) consult some of the detailed info given (every 5
159	minutes) in your SMB tab.
160	Such User action Automations need not be active at all times, but if you have it for
161	your first half day of a new G6 sensor for instance, you could activate that
162	Automation from your list of Automations; after the values have settled in, you can
163	de-activate (“shelve”) it again.
164
165	For a brief period, and if you are tech savvy, another way to deal with uncertainty about
166	CGM would be to employ the emulator method as presented in section 11: Run a “too
167	mildly” tuned FCL, and in parallel run a “what-if” with your more aggressive settings that you
168	really would like to use once you are certain about your CGM.
169
170	However, I found it easiest, to lay a solid groundwork by using 1 Anubis, and two
171	overlapping G6, to get rid of most problems (…that I keep seeing in my data, on the worse
172	sensor of the two that often run for some days in parallel; see case study 1.5).
173
174	With a sensible iobTH defined (see section 2.4), and your standard alarms for going towards a
175	hypo not silenced, the worst consequence from any automatically “over-treated” glucose jump
176	should be that you need an unplanned snack for the balance of “missing” carbs.
177	Like you should be used to from anti-hypo snacks also in your Hybrid Closed Looping past, you
178	might also in this case here prevent SMBs for a short while by setting a (here: odd numbered)
179	temporary glucose target (TT).
180
181	A disturbing and late sign of dealing with a too unreliable CGM (or too aggressive settings) could
182	be a trend towards increasing TDD and body weight during your early FCL experience!
183
184	1.4.2 Libre 3 CGM with 1 minute values
185
186	Libre 3 showed promising performance too, and using it with 1-minute values via Jugglucoo is
187	integrated, starting with autoISF version 3.0.1.

188
189	autoISF automatically detects whether values come through Jugglucoo, and adjusts parabola fit
190	calculations to determine acceleration etc. - It is currently too early to tell, but the 1 minute values
191	applied to the parabolic bg curve fit could present an avenue to earlier/better acceleration detection
192	than the 5-minute CGMs enable.
193
194	When running on Libre3 / 1 minute, you get many more SMBs that each are, on average, much
195	smaller. This has implications on some related settings (notably, the smb_range_extention, see
196	section 2.1).
197
198	Tests done prior to introducing the 1 minute Libre3 option (from autoISF 3.0.1 onwards) showed
199	overall comparable but smoother insulin delivery.
200	Call for a case study 1.6 from a Libre3 user!.
201
