# Chapter 0



<P>       0. Introduction                                                      V. 3.0 1 </P>





<img src="Bilder/00_Introduction_FCL-book.V 3.0_img_1.jpg"/>


<P>             Exploring Full Closed Loop potential of-autoISF     (=         2 </P>
<Figure>

<img src="Bilder/00_Introduction_FCL-book.V 3.0_img_2.jpg" alt=""/>
</Figure>

<P>Disclaimer – Important to read and understand </P>

<P>Authors are no medical professionals but T1 diabetics (or parents of a T1D                                  4 child) who report their -limited - understanding and experience, in an effort to contribute to a grow-5 ing body of knowledge, and to facilitate development of patient centered solutions.  6 </P>

<P>Nothing in this site is medical advice, but meant to stimulate patient-driven self-responsible re-7 search, and is meant also to stimulate product developments by the medical industry. Anything you 8 try to conclude for yourself you do on own risk. This is by no means a medical product but what 9 is offered is a toolset for participating in development.  10 </P>

<P>Never copy what others report to use, but investigate and adjust to your data. Neglecting safety 11 instructions, and just using the “buttons” that are made available in a supposed “learning by doing” 12 mode, would be very dangerous with the early development stage tools this research paper is 13 about.  14 </P>

<P>In case you choose to get deeper involved, run the system disconnected, parallel to your current 15 glucose management, to learn its behavior before eventually considering (on own risk) to go any 16 further. Please stay connected and share experiences, too. 17 </P>



<P>Introduction </P>

<P>Full Closed Loop using Automations is represented in AAPS Master and in the related 20 readthedocs since autumn 2023. (
<Link>https://androidaps.readthedocs.io/en/latest/Usage/Full-</Link>

<Link>ClosedLoop.html</Link>
. ). </P>

<P>Pre-requisites and the principal function of a Full Closed Loop, without the user ever giving a bolus 23 and without entering any carb info are explained, also in a couple of other languages, there (and 24 also in our section 1.) 25 </P>



<P>autoISF is being developed as a much more sophisticated alternative for FCL, aiming at 27 higher %TIR performance and/or higher degree of daily „freedom“ than simpler approaches to 28 FCL could  provide. 29 </P>

<P>However, this demands much higher degree of involvement by the user. Setting up your FCL is a 30 very serious multi-week project, and it is important that you follow us through the material in 31 the sequence of suggested steps. 32 </P>

<P>With autoISF, and especially with the intention to use it for Full Closed Loop, you are in the early 33 development area. It is therefore important to observe the disclaimer given above, and the warn-34 ings given in the e-book sections, as well as the hints given by the developers in the respective 35 manuals and readme files on their Github pages: 36 </P>



<li>
<LBody>For autoISF with AAPS, the main ones are 
<Link>https://github.com/ga-zelle/autoISF/</Link>
  and
<Link>https://github.com/T-o-b-i-a-s/AndroidAPS/tree/3.2.0.4-ai3.0.1</Link>
</LBody>
</li>




<li>
<LBody> Note there is no FCL solution for iOS Loop because their algorithm depends very much on 41 carb inputs.  42 </LBody>
</li>




<li>
<LBody> However, the oref(1) algorithm (UAM+SMB as in AAPS) has been developed also for          44 i-Phone based systems:  45 </LBody>
</li>


<li>
<LBody>o on the Trio platform 
<Link>https://discord.gg/Rr37aAzWz9</Link>
, dev variant with autoISF see 46 
<Link>https://github.com/mountrcg/Trio</Link>
 47 </LBody>
</li>

<li>
<LBody>o on the iAPS platform, with  autoISF ported into an early development branch of 48 iAPS: 
<Link>https://github.com/mountrcg/iAPS /</Link>
 readme.md.                                                         49 dev_autoISF3.x_newUI is the default branch there for autoISF.   </LBody>
</li>


<P>Note that setting up an autoISF FCL on i-Phone platform may be especially hard. 51 iAPS/Trio users are disadvantaged vs AAPS because  
<ol> 
<li> lack of some technical fea-52 tures (Automations,  emulator)  </li>
<li> there is no e-book variant exactly for their system </li> 
<li> many users did not go through the mandatory “education” via Objectives as in AAPS, and might not have a good “vanilla HCL” starting point (“blueprint for your 55 FCL”, as I call it in section 4.1)  </li>

</ol>

<P> Unless you are ready to do a lot of reading and loop data analysis to get your FCL running, please 58 stay away. Trial and error won’t get you far: Yes; with 18 (!) additional parameters on bord, you al-59 ways can “trick” your loop to get one situation (e.g. pizza) look pretty good. But to find settings that 60 cover also other situations well (say, a salad with chicken) is not easy. It is possible, though, if you 61 “build” your FCL following the suggestions, notably in sections 2 and 4). 62 </P>


<P>If you currently can’t commit yourself, or lack an important pre-requisite, you might want to con-67 sider one of the following “easier” options: 68 </P>


<li>
<LBody> You could first try the Full Closed Loop in a simpler form with Automations (see AAPS 69 readthedocs and section 13.1):  70 </LBody>
</li>


<P>Depending on the quality of their HCL tuning they are starting from, their expectations for 71 %TIR, and on rapid carb contents of their diet, an increasing number of people succeed in 72 making a respectable start the first time they try using AAPS in that much simpler Full 73 Closed Loop mode. 74 </P>

<P>See also the first published medical study that included 16 patients using AAPS, who found, 75 on average, comparable %TIR performance when using a basic Full Closed Loop mode: 76 
<Link>https://pubmed.ncbi.nlm.nih.gov/36826996/</Link>
 77 </P>


<li>
<LBody> You could also opt for a Meal Announcement method, which is a significant step from 78 HCL towards FCL, but still involves a pre-bolus.  79 </LBody>
</li>

<li>
<LBody>o For autoISF, this method is sketched in section 7. 80 </LBody>
</li>

<li>
<LBody>o Other early-DEV-variants of AAPS are mentioned in section 13.3, which also un-81 dergo permanent further development (Boost, AIMI, EatingNow, Tsunami). 82 </LBody>
</li>


<P>Note that all these “Meal Announcement” methods are far less well described than the two FCL 83 options, but they are easier to set up and give some of the benefits you may seek (notably, no 84 carb counting).  85 </P>
