---
version: 1.0
submitted_by: yelghali, markus-ntt-seidl
published_date: TBD
category: cloud
description: [PATTERN_DESCRIPTION_METADATA]
tags: 
 - cloud
 - size:small
---

# Scale down applications when not in use

## Description

Applications tend to consume CPU even when they are not actively being used. This includes background timers, garbage collection and health checks, among others. Even when the application is shut down, the underlying hardware continues to consume idle power.
This is also true for development and test applications and hardware in out-of-office hours.

## Solution

Scale down applications and hardware that are not in use on a schedule. Cloud vendors and software solutions (ex. Kubernetes) provide various ways to manage this efficiently.

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Scaling down applications when they are not in use impacts SCI as follows:

- `E`: Reduces energy consumption in hours when the application and hardware can be shut down or switched off.

## Assumptions

- There is an assumption that that the application has predictable traffic or usage patterns and this must be known in advance.

## Considerations

- Consider moving to a serverless architecture

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
