# SMB Range Extention
preferences/OpenAPS SMB/autoISF settings/smb delivery settings/smb_max_range_extension

## 2.1.1 Standard scenario: SMB sizes based on 5 minute loop calculations

Full Closed Looping requires bigger SMB sizes. Setting 120 minutes of basal as max. SMB size
as enabled in AAPS Master is necessary, but will rarely suffice.
In AAPS Preferences/OpenAPS SMB/autoISF settings/smb delivery settings, set SMB/UAM max
range extention (smb_max_range_extension) to 2.0. That doubles the allowed max. size, to four
hours of your profile basal, for a start.

Even better, you could determine an estimate for your initial setting as in the following
description, I will use the symbol, ….. , to denote where you would use your numbers. My
numbers that I use for the same situation will be in parentheses (U).

In full closed loop, once the bg starts rising, you want to get at least half of your required
meal bolus within 10 minutes, through 2 SMBs. To do that, you need (2 U) per SMB
on average, and because the bolus sizes tend not to be equal when requested by the Loop,
you should have at least (3 U) as the allowable SMB size. Your hourly basal is
around (0.6 U), i.e. AAPS Master will allow a max. 2 times that hourly basal which
= ..... U (1.2 U) per SMB. To reach the intended .... U (3 U) therefore you should set your
smb_max_range_extension to ....  ( 2.5 = 3 U / 1.2 U)

The profile helper in section 4.8 might be available for doing this calculation, and for a
cross-check.

If you have a very low hourly basal rate, extensions bigger than 3.0 can result (maximum you can
set is 5).

Note: Elevated insulin needs in phases of elevated insulin resistance probably will be managed
with >100% profile adjustments. Then, profile basal gets elevated accordingly, and thus will
automatically allow increased SMB size.

Watch out (in your SMB tab, or using the emulator, section 10) whether you often run into a
limitation by your set smb_max_range_extention. For instance, your attempts to increase initial
SMB sizes via elevated smb_delivery_ratio [section 2.3](section_2.3.md) and elevated bgAccel_ISF_weight
(section 4.2) might get cut by a too low smb_max_range_extention.

The SMBs your loop requests could get reduced in size also by other safety settings, notably by
your autoISF_max setting [see section 2.2](section_2.2.md).


## 2.1.2 Special Libre 3 (1 minute) scenario with up to 5 SMBs per 5 minutes

When receiving bg values every minute, and adjusting insulin delivery accordingly in smaller steps, probably
    120 minutes of basal per SMB suffices.

Watch whether your system actually can process 5 loop calculations (and potentially give 5 SMBs) in 5
minutes. Then judge (similar like shown in [section 2.1.1](section_2_1.md)), what maximum SMB size you would like to see.

Probably you can leave SMB_range_extension at default 1.0 untouched (but select higher if you have an
extremely low profile basal in some of your meal hours, or if your loop “misses” many of the opportunities
to make an adjustment, every minute).

Integration of 1-minute values is new from autoISF 3.0.1 (May 2024). Please watch your SMB tab (difficult
in 1 minute segments => make screenshots, or employ Emulator!), and report experiences / stay in touch
with other users.
