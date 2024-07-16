# 2.3.1 Standard scenario, using 5 minute loop calculations

Use the fixed smb_delivery_ratio and increase the setting (from AAPS default 0.5) to 0.6 or 0.7.

In AAPS Preferences, the smb_delivery_ratio can also be set dynamically (changing with glucose level). 
- This seems a feature geared more towards hybrid closed loop applications.
(In FCL, we like strong loop aggressiveness at low (but rising) bg, not “wait for” high bg).


So, set your ratio to 0.6 or 0.7 before doing any _weights tuning. Your choice will magnify every
change in the _weights, and you will see the effects more clearly.



SMB, also in phases where you actually want less, so do not exaggerate
with the ratio. 0.6 gets you 20% , 0.7 gets you 40% more insulin 5 minutes earlier, which is a good thing in FCL
where you are late with your first meal insulin. But you do not get 20-40 % more really: You
gradually will receive the full insulinReq only in increased % increments, 5 -10 minutes earlier.
The delivery ratio is per se not changing the insulinReq, it just defines what portion gets delivered now vs 5 or
10 minutes later... if the BG trend keeps up.


In that way, keeping the number closer to 0.5 protects against a jittery CGM mostly.
As in FCL we have an above-avg CGM quality, we can safely go for 0.6 or 0.7 SMB delivery ratio as kind of
our tuning baseline.

...mermaid


...
 It is not recommended to go over 0.8 ever. The jumpier your CGM, the closer remain near 0.5!


125	If you had tuned with a 1.0 SMB delivery ratio, and now go lower: I would not expect major re-
126	tuning required, but look into bgAccel and notably implications for the set iobTH%: A 1.0 ratio made
127	you often bounce over iobTH in a more "nervous" loop. You now could fine tune that more sensibly,
128	probably elevate the iobTH even (and maybe also , slightly, the accel weight) (which, for safety
129	against your wild 1.0 setting, had to be lower before)(Or, If you were unsafe before, leave iobTH
130	where it was, and you are safer now, with lower ratio)

