export default function repCathegorization(state) {
  if (state.fluid === '') return null;
  let cathegory;

  const { volMin, presMin, psvMin, psMin } = state.minConditions;

  const { ps, volume, cat } = state;

  const { Art43, I, II, III } = state.cat;

  const limitsKeys = Object.keys(cat);
  let limits = [];
  limitsKeys.forEach((element) => {
    if (!isNaN(parseInt(element))) limits.push(parseInt(element));
  });

  if (ps * volume > III || ps > III) cathegory = 'Cat. IV';
  if (ps * volume <= III) cathegory = 'Cat. III';
  if (ps * volume <= II) cathegory = 'Cat. II';
  if (ps * volume <= I) cathegory = 'Cat. I';
  if ((volume <= volMin && ps <= II) || ps * volume <= Art43)
    cathegory = 'Art 4.3';
  if (ps <= presMin || volume <= 0.1) cathegory = 'Not REP';

  console.log(limits);

  return cathegory;
}
