# 0. Introduction

## Exploring Full Closed Loop potential of-autoISF

### Disclaimer – Important to read and understand
<blockquote> 
Authors are no medical professionals but T1 diabetics (or parents of a T1D child) who report their -limited - 
understanding and experience, in an effort to contribute to a growing body of knowledge, and to facilitate 
development of patient centered solutions. Nothing in this site is medical advice, but meant to stimulate 
patient-driven self-responsible re-search, and is meant also to stimulate product 
developments by the medical industry. Anything you try to conclude for yourself you do on own risk. 
This is by no means a medical product but what is offered is a toolset for participating in development. 
Never copy what others report to use, but investigate and adjust to your data. Neglecting safety instructions, and just using the “buttons” that are made available in a supposed “learning by doing” mode, would be very dangerous with the early development stage tools this research paper is about. 
In case you choose to get deeper involved, run the system disconnected, parallel to
your current glucose management, to learn its behavior before eventually considering (on own risk) 
to go any further. 
<p> <b>Please stay connected and share experiences, too.</b></p>
</blockquote>


Full Closed Loop using Automations is represented in AAPS Master and in the related
readthedocs since autumn 2023. <https://androidaps.readthedocs.io/en/latest/Usage/FullClosedLoop.html>.
Pre-requisites and the principal function of a Full Closed Loop, without the user ever giving a bolus
and without entering any carb info are explained, also in a couple of other languages there and
also in our [section 1](section_1.md).


Pre-requisites and the principal function of a Full Closed Loop, without the user ever giving a bolus
and without entering any carb info are explained, also in a couple of other languages, there (and
also in our [section 1](section_1.md).

**autoISF** is being developed **as a much more sophisticated alternative for FCL, aiming at
higher %TIR performance and/or higher degree of daily „freedom“ **than simpler approaches to
FCL could provide.
However, this demands much higher degree of involvement by the user. **Setting up your FCL is a
very serious multi-week project, and it is important that you follow us through the material in
the sequence of suggested steps.**

With autoISF, and especially with the intention to use it for Full Closed Loop, you are in the early
development area. It is therefore important to observe the disclaimer given above, and the warnings
given in the e-book sections, as well as the hints given by the developers in the respective
manuals and readme files on their Github pages:

- For autoISF with AAPS, the main ones are <https://github.com/ga-zelle/autoISF/> and <https://github.com/T-o-b-i-a-s/AndroidAPS/tree/3.2.0.4-ai3.0.1>
- Note there is no FCL solution for iOS Loop because their algorithm depends very much on carb inputs.
- However, the oref(1) algorithm (UAM+SMB as in AAPS) has been developed also for i-Phone based systems:
    - on the Trio platform <https://discord.gg/Rr37aAzWz9>, dev variant with autoISF see <https://github.com/mountrcg/Trio>
    - on the iAPS platform, with autoISF ported into an early development branch of iAPS: https://github.com/mountrcg/iAPS / readme.md. dev_autoISF3.x_newUI is the default branch there for autoISF.


Note that setting up an autoISF FCL on i-Phone platform may be especially hard. iAPS/Trio users are disadvantaged vs AAPS because
1) lack of some technical features (Automations, emulator)
2) there is no e-book variant exactly for their system
3) many users did not go through the mandatory “education” via Objectives as in AAPS, and might not have a good “vanilla HCL” starting point (“blueprint for your
   FCL”, as I call it in [section 4.1](section_4.md) )


Unless you are ready to do a lot of reading and loop data analysis to get your FCL running, please
stay away. Trial and error won’t get you far: Yes; with 18 (!) additional parameters on bord, you al-
ways can “trick” your loop to get one situation (e.g. pizza) look pretty good. But to find settings that
cover also other situations well (say, a salad with chicken) is not easy. It is possible, though, if you
“build” your FCL following the suggestions, notably in [sections 2](section_2.md) and [section 4](section_4.md).

If you currently can’t commit yourself, or lack an important pre-requisite, you might want to consider one of the following “easier” options:
•	You could first try the Full Closed Loop in a simpler form with Automations (see [AAPS readthedocs](https://androidaps.readthedocs.io/en/latest/Usage/FullClosedLoop.html) and section 13.1)

<blockquote>Depending on the quality of their HCL tuning they are starting from, their expectations for
%TIR, and on rapid carb contents of their diet, an increasing number of people succeed in
making a respectable start the first time they try using AAPS in that much simpler Full
Closed Loop mode.
See also the first published medical study that included 16 patients using AAPS, who found, 
on average, comparable %TIR performance when using a basic Full Closed Loop mode:
<a href=" https://pubmed.ncbi.nlm.nih.gov/36826996/">https://pubmed.ncbi.nlm.nih.gov/36826996/</a> </blockquote>


You could also opt for a Meal Announcement method, which is a significant step from
HCL towards FCL, but still involves a pre-bolus.
- For autoISF, this method is sketched in [section 7]().
- Other early-DEV-variants of AAPS are mentioned in section 13.3, which also undergo permanent further development (Boost, AIMI, EatingNow, Tsunami).

Note that all these “Meal Announcement” methods are far less well described than the two FCL options, but they are easier to set up and give some of
the benefits you may seek (notably, no carb counting)















