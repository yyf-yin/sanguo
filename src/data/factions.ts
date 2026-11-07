export type FactionId = 'han' | 'wei' | 'shu' | 'wu' | 'qun' | 'jin';

export interface Faction {
  id: FactionId;
  name: string;
  full: string;
  color: string;
  span?: string;
  capital?: string;
  founder?: string;
  intro: string;
}

export const factions: Record<FactionId, Faction> = {
  han: {
    id: 'han',
    name: '汉',
    full: '东汉',
    color: '#8a6d3b',
    span: '25–220',
    capital: '洛阳 → 长安 → 许',
    intro: '东汉末年宦官外戚交替专权，黄巾起义后地方豪强拥兵自重，汉室名存实亡，最终由曹丕受禅而终结。',
  },
  wei: {
    id: 'wei',
    name: '魏',
    full: '曹魏',
    color: '#3b5b8c',
    span: '220–266',
    capital: '洛阳',
    founder: '曹丕（追尊曹操为武帝）',
    intro: '曹操“挟天子以令诸侯”，统一北方，奠定三国中最强的国力。曹丕代汉建魏，后期大权逐渐落入司马氏之手。',
  },
  shu: {
    id: 'shu',
    name: '蜀',
    full: '蜀汉',
    color: '#3f7d4e',
    span: '221–263',
    capital: '成都',
    founder: '刘备',
    intro: '刘备以汉室宗亲自居，据有益州、汉中，国号仍为“汉”，史称蜀汉。诸葛亮辅政，多次北伐，终为魏所灭。',
  },
  wu: {
    id: 'wu',
    name: '吴',
    full: '孙吴',
    color: '#b5452f',
    span: '229–280',
    capital: '建业',
    founder: '孙权',
    intro: '孙坚、孙策父子开创江东基业，孙权继之，凭长江天险与魏、蜀周旋，是三国中存续最久的政权。',
  },
  qun: {
    id: 'qun',
    name: '群',
    full: '群雄',
    color: '#6b6258',
    intro: '汉末割据一方的诸侯与豪强，如董卓、袁绍、吕布、袁术、刘表等，在群雄逐鹿中相继败亡。',
  },
  jin: {
    id: 'jin',
    name: '晋',
    full: '西晋',
    color: '#5c4b7d',
    span: '266–316',
    capital: '洛阳',
    founder: '司马炎',
    intro: '司马炎受魏禅建晋，280 年灭吴，结束了近百年的分裂局面。',
  },
};

export const kingdoms = [factions.wei, factions.shu, factions.wu];
