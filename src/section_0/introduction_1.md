# Introduction

AutoISF is meant for the advanced user who has a deep understanding of AAPS and who has tuned the
system to achieve a TIR of about 90% or better. If such a user is ambitious and wants to improve further,
the methods contained can very well help.


This document describes how and when ISF is adapted automatically and provides short descriptions of
the weighting factors to tune it to your individual needs. Detailed guides covering special situations and
examples will follow later as separate documents including results of using it in full loop mode, i.e.
without carb or insulin entry by the user. Furthermore, it describes alternative methods how to scale,
activate or deactivate SMBs. Finally there are methods for handling activity ranging from mild up to
intensive levels.


The adaptation of ISF is based on special glucose behaviour and results in an adaptation factor just like
the Autosense factor. However, here only ISF is adapted and no other setting. The scenarios analysed
typically cover the last 10-30 minutes and therefore autoISF reacts much faster to problems or recoveries.
Often Autosense would drive me into hypos because of its delayed reaction even after things had come
back to target and I disabled Autosense although mathematically both can coexist.

AutoISF is part of oref1 in OpenAPS SMB plugin and cannot coexist with the recent DynamicISF which
therefore is included in its own plugin anyway as an alternative to OpenAPS AMA and OpenAPS SMB.

Please note that these rapid adaptations of ISF render the use of Autosense and Autotune useless because
those would draw conclusions based on constant ISF and therefore false assumptions. If you want to use
Autotune then disable those autoISF features which adapt ISF for those periods.

There are 4 different effects in glucose behaviour that autoISF checks and reacts to:
1. **acce_ISF** is a factor derived from acceleration of glucose levels
2. **bg_ISF** is a factor derived from the deviation of glucose from target
3. **pp_ISF** is a factor derived from glucose rise delta
4. **dura_ISF** is a factor derived from glucose being stuck at high levels

Finally these factors are compared among each other and against Autosense. Normally the strongest of
them will be used with some exceptions as detailed further below. These factors work the same way as the
Autosense factor works, i.e. the profile sensitivity ISF is divided by the factor to deliver a final sensitivity
ISF.


In the SMB-tab, section Script debug, you can always see which values were assigned to the 4 factors
shown above during the last loop execution. It also lists explanations in case the factor had to be modified
or why it cannot be used. Some interim values like dura_ISF_average are listed, too. All that can be seen
in the SMB-tab, sections Glucose status, Profile and Script debug, respectively.
Again in analogy to Autosense there are upper (autoISF_max) and lower (autoISF_min) limits for how far
ISF can be modified in total.


In analogy to enabling SMB there is a setting enable_autoISF which determines whether any of the 4 ISF
adaptations of autoISF listed above are enabled or none at all.


The settings specific to autoISF are collected in its own menu found at the end of the OpenAPS SMB
menu. A screenshot is shown as attachment. Another trick for finding them is to use the filter method at
the top of the Preferences page which searches for all settings containing the string you enter in the filter
field.
