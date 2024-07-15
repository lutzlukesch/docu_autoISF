# Pre-requisites for Full Closed Loop

<blockquote>
Please note that with autoISF you are in an early-dev. environment, where the user interface 
is not optimized for safety of users who stray away from intended ways to use. Good safety features exist, 
but these are only as good as the development-oriented user understands and implements them. 
This is not a medical product, refer to disclaimer in <a href="README.md">section 0</a>  </blockquote>


## 1.1 Well-tuned hybrid closed loop (HCL)

It is advisable to first establish a well-tuned hybrid closed loop before considering the transition to
FCL. Best if you achieved good HCL performance without using Autotune or dynamicISF (which
can introduce, or cover up, problems that would get exposed in your transition to Full Closed Loop
(FCL); more see at beginning of section 4). 21
There are two important reasons for starting on a solid basis (profile):
- The UAM full closed loop requires a highly personalized (individual) tuning of settings, so the loop will give insulin mimicking YOUR successful hybrid closed loop mode.
- The UAM full closed loop comes with new parameters to be set and tuned. It would be problematic to set and tune several new parameters before the basics were tuned “right”. Errors could easily be balanced with counter-errors. This can work in single scenarios, but would create a highly unstable system. It would be very hard to re-calibrate better later, too.



## 1.2 Fast insulin (Lyumjev, Fiasp, Apidra?)

It should be clear without saying, but it is absolutely necessary to feed your loop with correct time-
to-peak and DIA for your insulin, so it has any chance to know how the iob will get active in your
body. See Insulin_DIA…pdf” in: <https://github.com/bernie4375/HCL-Meal-Mgt.-ISF-and-IC-settings>

If the user does not bolus for meals, clearly a very fast insulin is needed so, upon realization of a
starting meal-related glucose rise, the loop has any chance to eventually keep glucose in range (by
common definition, under 180 mg/dl (10 mmol/l))


A modelling study..
key findings are summarized in initial section of case study 1.2; for more see:
https://github.com/bernie4375/HCL-Meal-Mgt.-ISF-and-IC-settings/blob/HCL-.-settings-main-repo-(pdf)/The%20Artificial%20Pancreas%20and%20Meal%20Control.pdf

…can show in quantitative terms, that faster insulins:
- will result in significantly lower glucose peaks than slower insulin 
- tolerate a couple of minutes delayed first meal bolus while not incurring unacceptable
height of peaks 
- minimize the effect on glucose peak from different carb load (meal sizes).

In conclusion, do not attempt FCL with other insulin than Lyumjev® or Fiasp®.
Potential exceptions:
- Being consistently on low carb, on a GLP-1 drug, or with gastroparesis -all of which ease the
job of a FCL significantly.

- According to case study 1.2, Apidra® might work, too, but Humalog® would not work well
(with “normal diet”).

## 1.3 Reliable insulin delivery from the used pump/cannula/insulin system

### Good tolerance of Lyumjev (or Fiasp): Occlusions threaten the function of the full closed loop.

It is very important to have an eye on the time a cannula (or pod) is in use (many find 48 hrs to be
the limit), and whether hard-to-explain glucose rises happen at ever increasing „fake“ iob (even
before a 48 hr routine replacement). (See case study 1.1: You easily lose 25% TIR that day)
It is absolutely contra-indicated to attempt FCL coming from leaking pods and associated erratic
sensitivity swings that may or may not have been somewhat controlled and tolerable by
dynamicISF or other measures when you were Hybrid Closed Looping,

### Stable pump connection
In FCL you absolutely rely on your pump delivering, without any further delay, the much needed insulin,
after any meal start. Hence it is absolutely essential to avoid any problems from a lost Bluetooth connection. 
In AAPS preferences / Local alerts, switch alert on! An Automation similar to the one pictured [here] <img src="images/automation.png" alt="Description of image" class="float-right">could also help recognizing eventual problems.
See also case study 1.4





