import Link from "next/link";
export default function Home() {
  return (
    <div>
          <Link href="/">
        <h3 className="h3"><i><button>back</button></i></h3>
        </Link>
      <h1 className="mainHeading">
        {" "}
        <b>noise pollution,</b>
      </h1>{" "}
      unwanted or excessive sound that can have deleterious effects on human
      health, wildlife, and environmental quality. Noise pollution is commonly
      generated inside many industrial facilities and some other workplaces, but
      it also comes from highway, railway, and airplane traffic and from outdoor
      construction activities.
      <br />
      <h1 className="mainHeading">
        <b>Measuring and perceiving loudness </b>
      </h1>
      Sound waves are vibrations of air molecules carried from a noise source to
      the ear. Sound is typically described in terms of the loudness (amplitude)
      and the pitch (frequency) of the wave. Loudness (also called sound
      pressure level, or SPL) is measured in logarithmic units called decibels
      (dB). The normal human ear can detect sounds that range between 0 dB
      (hearing threshold) and about 140 dB, with sounds between 120dB and 140 dB
      causing pain (pain threshold). The ambient SPL in a library is about 35
      dB, while that inside a moving bus or subway train is roughly 85 dB;
      building construction activities can generate SPLs as high as 105 dB at
      the source. SPLs decrease with distance from the source. The rate at which
      sound energy is transmitted, called sound intensity, is proportional to
      the square of the SPL. Because of the logarithmic nature of the decibel
      scale, an increase of 10 dB represents a 10-fold increase in sound
      intensity, an increase of 20 dB represents a 100-fold increase in
      intensity, a 30-dB increase represents a 1,000-fold increase in intensity,
      and so on. When sound intensity is doubled, on the other hand, the SPL
      increases by only 3 dB. For example, if a construction drill causes a
      noise level of about 90 dB, then two identical drills operating side by
      side will cause a noise level of 93 dB. On the other hand, when two sounds
      that differ by more than 15 dB in SPL are combined, the weaker sound is
      masked (or drowned out) by the louder sound. For example, if an 80-dB
      drill is operating next to a 95-dB dozer at a construction site, the
      combined SPL of those two sources will be measured as 95 dB; the less
      intense sound from the compressor will not be noticeable. Frequency of a
      sound wave is expressed in cycles per second (cps), but hertz (Hz) is more
      commonly used (1 cps = 1 Hz). The human eardrum is a very sensitive organ
      with a large dynamic range, being able to detect sounds at frequencies as
      low as 20 Hz (a very low pitch) up to about 20,000 Hz (a very high pitch).
      The pitch of a human voice in normal conversation occurs at frequencies
      between 250 Hz and 2,000 Hz.
      <br />
      Precise measurement and scientific description of sound levels differ from
      most subjective human perceptions and opinions about sound. Subjective
      human responses to noise depend on both pitch and loudness. People with
      normal hearing generally perceive high-frequency sounds to be louder than
      low-frequency sounds of the same amplitude. For this reason, electronic
      sound-level meters used to measure noise levels take into account the
      variations of perceived loudness with pitch. Frequency filters in the
      meters serve to match meter readings with the sensitivity of the human ear
      and the relative loudness of various sounds. The so-called A-weighted
      filter, for example, is commonly used for measuring ambient community
      noise. SPL measurements made with this filter are expressed as A-weighted
      decibels, or dBA. Most people perceive and describe a 6- to 10-dBA
      increase in an SPL reading to be a doubling of “loudness.” Another system,
      the C-weighted (dBC) scale, is sometimes used for impact noise levels,
      such as gunfire, and tends to be more accurate than dBA for the perceived
      loudness of sounds with low frequency components. Noise levels generally
      vary with time, so noise measurement data are reported as time-averaged
      values to express overall noise levels. There are several ways to do this.
      For example, the results of a set of repeated sound-level measurements may
      be reported as L90 = 75 dBA, meaning that the levels were equal to or
      higher than 75 dBA for 90 percent of the time. Another unit, called
      equivalent sound levels (Leq), can be used to express an average SPL over
      any period of interest, such as an eight-hour workday. (Leq is a
      logarithmic average rather than an arithmetic average, so loud events
      prevail in the overall result.) A unit called day-night sound level (DNL
      or Ldn) accounts for the fact that people are more sensitive to noise
      during the night, so a 10-dBA penalty is added to SPL values that are
      measured between 10 pm and 7 am. DNL measurements are very useful for
      describing overall community exposure to aircraft noise, for example.
    </div>
  );
}
