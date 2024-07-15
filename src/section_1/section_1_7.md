# 1.7 Time required for setting-up
	
Lastly, before enjoying a functioning full closed loop you need to have a period of a some weeks
	with some free time and „free head“ for set-up –. Can you get, in the time you are willing to invest,
	to a result that you consider good-enough is really the question. Depending on your „habits“, and
	which – if any - compromises (like doing cannula/pod changes more often, never starting meals
	when bg sits high … ) are you willing to make (and everyday able to stick to), for the ease of not
	having to deal with assessing meals and bolusing for them?


## 1.7.1 Recommended structured, step-by-step approach (see also beginning of section 4)
Setting up your personal FCL using autoISF is a substantial project, for which you should follow
    the sequence as described in this e-book.
    But there is no need to implement it fully in one step.
    • Start with the basic settings, and then proceed step by step, as you feel comfortable. 
    • There is nothing wrong to go in your well running Hybrid Closed Loop mostly, while  
    switching to FCL only for dinners, for instance, or only for weekend lunches, as a start.
    • Once you found feasible settings, you can expand to other meal times…
    …. and lastly towards figuring out your best strategies for challenges aside from meal 
    management, as we shall discuss in sections 5. and 6.
        

There are alternatives to using autoISF for FCL, as well. See sections 7 and 13. for more info.
Notably FCL using AAPS Master and Automations (see in section 13.1).could be a much
    easier and more error-tolerant way of stepping into FCL. In a clinical study with 16
    participants about 80% TIR was achieved without much tuning effort
    (https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8052127/).
    To close the circle to where we had started; A very time consuming pre-requisite might actually b
    to first sort out your Hybrid Closed Loop (section 1.1), so your profile parameters are set „right“,
    and your “old” data really can serve as a blueprint for what, now, you would like your loop to do in
    FCL mode


If you feel you better do your homework first there, I highly recommend some of the material in the
    neighboring HCL repo: https://github.com/bernie4375/HCL-Meal-Mgt.-ISF-and-IC-settings


## 1.7.2 “Trial and error” fast track alternative

Note that if you had used dynamic parameters or special Automations („loops inside the loop“) this
    might have balanced some principal errors, but leaves you now without a good starting point, as
    you must get rid of these over-patches (see also warnings at start of section 4)..

Nevertheless, you will find FCL success stories also from loopers who continue(d) in that spirit, and
just jump(ed) into using more powerful tools, in kind of a trial and error mode, frequently adding the
    latest add-on, or self-constructed patch (often in form of an Automation), to counter-balance
    encountered problems.


Resulting solutions may be good-enough.
But they tend to be unstable and not well-understood. That is a poor basis for managing arising
    problems, and for temporarily adjusting to special situations.

Nevertheless, it is an alternative avenue for the impatient, less analytically, and more adventurous    
    inclined.
Note though, that it is hard to consult (help) someone who, over time, constructed his/her own 
    complicated maze of constructs. Among those could even be something truly amazing of broader 
    interest, potentially pushing innovation for us all forward.

But also be prepared to eventually needing a complete fresh re-start, if your trial-and-error got
    you lost., which, depending on your knowledge level and experience, easy can happen on this
    “fast track” route,


##	1.7.3 Safety first

Regardless which route you choose, PLEASE always observe the safety settings/instructions
    coming with the DIY dev- variant of FCL software you select.

All FCL methods come with boosted SMBs. So a key safety measure every user going towards
    any FCL should have in place is to set an iob threshold (iobTH; size a bit below what you used as
    a bolus for bigger meals in HCL) above which no more SMBs can be given by your FCL.


•	iobTH is an integrated feature of autoISF (see section 2.4).
•	Other AAPS-based FCL methods may require to set up an Automation for a temporary iob
    threshold that blocks SMBs from being delivered, see e.g. here for AAPS FCL
    w/Automations; :https://androidaps.readthedocs.io/de/latest/Usage/FullClosedLoop.html#io
    b-threshold .

In case there are other methods than autoISF for FCL also on the iAPS or Open iAPS platforms, you
    may have to rely on an adjusted iob_max border, or watch the iob development, and intervene with a
    SMB shut-off, or by opening the loop, when deemed necessary.

Also, make use of the easy-to-use feature of SMB shut-off at odd profile or temporary target. This
    can at any time easily be done manually, via the top right “TT” field in your AAPS screen (set, and
    time, an odd-numbered target; section 5.1.3), and can be of enormous help to temporarily
    safeguard you from aggressive loop actions (i.e. further growth of iob, no matter how close you
    already may be to the iobTH)-

This is the same concept that you already know from your HCL times, when you wanted to “tame your loop”
    so it does not “fight” your anti-Hypo Snack with a SMB (An elevated TT> 100 mg/dl was then used, to shut
    off SMBs in HCL for a while).

Lastly, make sure you “train”, for your set-up weeks, how/when to transition between FCL and 
    your prior HCL mode (refer to section 5.1.1 and 5.2.3 ).

A new User Interface has been suggested to ease this transition via a modified loop button in the AAPS main
    screen (developers: see section 5.3,1).

[]: # (end) 

