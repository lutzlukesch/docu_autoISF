# AutoISF3.0.1 – Quick User Guide

<div class="admonition warning">
Disclaimer: I am not a medically trained person and developed these methods purely based on trial and
numerical experimentation. For example, I had no mathematical model of the reaction kinetics of the free
fatty acids which are one reasons for temporary insulin resistance. If you want to try some of these
features yourself you do it at your own risk and your own liability.
</div>

## Preface
The purpose of this document is to describe the features of autoISF and their settings. Hints for specific
tuning will be given in “How-to-…” guides which are under development or planned. These tuning hints
differ from person to person and depend on your planned usage scenario of autoISF like just testing it,
fine tune AAPS, low carb diet, extensive endurance exercise, or full loop, i.e. no announcing of carbs and
no manually triggered bolus.


The previous Quick Guides for earlier versions of autoISF were merged into this single document which
also introduces the new features. The focus of this release was on merging a side branch of autoISF
dedicated to [Libre development]() back into mainstream code. On that occasion several low-hanging fruit
were identified and included, too:
- These 5 settings were withdrawn because over time it proved they were not really necessary. One
direct impact is a flatter menu structure for the remaining settings:
  - pp_ISF_hours no longer required because …
  - enable_pp_ISF_always is now always true which means …
  - delta_ISFrange_weight is no longer used in favour of pp_ISF
  - enable_dura_ISF_with_COB is now always true
  - enable_SMB_EvenOn_OddOff was discontinued and unified with
  enableSMB_EvenOn_OddOff_always
- In the SMB tab the script debug section is now shown first. Often users want to understand the
  reasoning of autoISF and that way they have faster access to the relevant information. The rather
  long profile section is now at the bottom of that page.
- Now 100 logfiles instead of just 30 will be kept before getting recycled. This means users have a
  better chance to inspect them for past evidence.
- The SMB tab shows the current value of iob_threshold_percentage and how it was adapted to
  become the effective iob threshold.
- Formulations like [“full loop]()” were misleading and replaced.
  In version 3.0 a bug was discovered related to iob_threshold_percentage. Even if set at 100% to disable it
  the modulation due exercise mode etc. could activate its application. This is fixed now. However, what
  still can happen during intended use is that the various modulation effects end up with an effective iobTH
  above 100%. That looks awkward but is not critical because in such cases max_iob is capping SMB
  anyway.