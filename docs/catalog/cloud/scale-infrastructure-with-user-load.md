---
version: 1.0
submitted_by: franziska-nttdata-hesselfeld
published_date: TBD
category: cloud
tags: 
 - compute
 - cloud
 - role:cloud-engineer
 - size:medium
---

# Scale infrastructure with user load

## Description

When there are periods of low or no activity, resources can be scaled back to save energy. This can be done by reviewing workloads for predictable patterns.

## Solution

Scaling back resources during periods of low utilisation eliminates excess capacity and improves efficiency because a unit running at a high utilisation produces energy more efficiently. In addition, reducing the total number of resources used also reduces the amount of embodied carbon. 
By monitoring and analyzing the application usage patterns and activity, components that underutilize the hardware resources they are running on can be identified. For example, underutilized Virtual Machines can be easily identified by inspecting the CPU load over time. Underutilized resources can then be consolidated, shut down on a schedule and/or removed.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Scaling infrastructure along with user load impacts SCI as follows:

- `E`: Optimizing the application will lead to less electricity consumed over time.
- `M`: Embodied emissions of the application are also reduced since the optimization uses less hardware overall.

## Considerations

- Consider starting with the easiest optimizations first.

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_user_a2.html)
