---
layout: page
icon: fas fa-project-diagram
order: 3
mermaid: true
---

#### Boolean Satisfiability Encoding and Solving

```mermaid
flowchart TD
    CNF["$$(\textcolor{red}{\neg a}\lor b)\land(\textcolor{red}{\neg a}\lor\neg b)\land(b\lor c)\land(a\lor\neg c)$$"]
    A(( )) --> |"$$a$$"| B(( ))
    A --> |"$$\neg a$$"| C(( ))
    B --> |"$$b$$"| D(( ))
    B --> |"$$\neg b$$"| E(( ))
    C --> |"$$b$$"| F(( ))
    C --> |"$$\neg b$$"| G(( ))
    D --> |"$$c$$"| H(( ))
    D --> |"$$\neg c$$"| I(( ))
    E --> |"$$c$$"| J(( ))
    E --> |"$$\neg c$$"| K(( ))
    F --> |"$$c$$"| L(( ))
    F --> |"$$\neg c$$"| M(( ))
    G --> |"$$c$$"| N(( ))
    G --> |"$$\neg c$$"| O(( ))
    style CNF fill:none,stroke:#333,stroke-width:0px
    linkStyle 0,2,3 stroke:red,stroke-width:4px
    linkStyle 1,4,11 stroke:green,stroke-width:4px
```

<span style="font-size: 16px;">「充足可能性問題」，通称「SAT問題」は，与えられた命題論理式を満たす変数割当てが存在するかどうかを判定する問題である．上の図に示すように，論理変数 $a$ を真とすると，$b$ の割当てが矛盾に陥す．SAT問題の効率的な解法は，理論計算機科学における最も重要な課題の一つである．</span>

> "<span style="color:orange;">*N*-level modulo-based CNF encodings of pseudo-Boolean constraints for MaxSAT</span>". **Aolong Zha**, Miyuki Koshimura, Hiroshi Fujita. _Constraints_, Vol. 24(2), 2019, pp. 133--161. &nbsp;[<i class="fas fa-paperclip"></i>](/bibs.html#Zha_N) &nbsp;[<i class="ai ai-doi"></i>](https://doi.org/10.1007/s10601-018-9299-0)

> <span style="color:teal;">2nd place award in _Random SAT Track_, SAT Competition 2018</span> &nbsp;[<i class="fas fa-medal"></i>](/images/gluHack.pdf)

---

#### Coalition Structure Generation for Partition Function Games

```mermaid
kanban
  CS1[Coalition Structure 1]
    c1[Alice = Expert]@{ assigned: '3', priority: 'Very High' }
    c2[Ben = Intermediate]@{ assigned: '1', priority: 'Low' }
    c3[Carl = Beginner]@{ assigned: '-1', priority: 'High' }
  CS2[Coalition Structure 2]
    c4[Alice]@{ assigned: '2', priority: 'Very High' }
    c5[Ben + Carl]@{ assigned: '2' }
  CS3[Coalition Structure 3]
    c6[Alice + Carl]@{ assigned: '3' }
    c7[Ben]@{ assigned: '0', priority: 'Low' }
  CS4[Coalition Structure 4]
    c8[Alice + Ben]@{ assigned: '4' }
    c9[Carl]@{ assigned: '-1', priority: 'High' }
  CS5[Coalition Structure 5]
    c10[Alice + Ben + Carl]@{ assigned: '2' }
```

<span style="font-size: 16px;">「提携構造形成問題」は，協力ゲーム理論の問題の一つであり，エージェント集合を社会的利得が最大となるよう分割する問題である．上の図に示すように，上級者・中級者・初心者を含む3人の集合があって，彼らそれぞれの貢献度は，どのようにチームを組むかによって多少変動する．いかにして彼らを組合せ，最大の社会的価値を生み出すか，それがこの問題の本質である．</span>

> "<span style="color:orange;">Coalition structure generation for partition function games utilizing a concise graphical representation</span>". **Aolong Zha**, Kazuki Nomoto, Suguru Ueda, Miyuki Koshimura, Yuko Sakurai, Makoto Yokoo. In _Proc. of 20th International Conference on Principles and Practice of Multi-Agent Systems_, 2017, pp. 143--159. &nbsp;[<i class="fas fa-paperclip"></i>](/bibs.html#Zha_CSG) &nbsp;[<i class="ai ai-doi"></i>](https://doi.org/10.1007/978-3-319-69131-2_9)

---

#### Real-Time Taxi-Sharing Assignment

![Desktop View](/images/RTSS_Simula.gif){: width="360" }

<span style="font-size: 16px;">利用者は乗車希望時刻と場所，及び降車希望時刻と場所を配車システムに送信する．システムはその条件に基づき最適化を行い，タクシーをリアルタイムで割り当てる．従来のタクシーサービスと異なり，このシステムは異なる利用者のリクエストを考慮し，相乗りを可能にすることで運賃の削減を図る．</span>

> "<span style="color:orange;">An incremental SAT-based approach for solving the real-time taxi-sharing service problem</span>". **Aolong Zha**, Qiong Chang, Ituski Noda. _Discrete Applied Mathematics_, Vol. 335, 2023, pp. 131--145. &nbsp;[<i class="fas fa-paperclip"></i>](/bibs.html#Zha_An) &nbsp;[<i class="ai ai-doi"></i>](https://doi.org/10.1016/j.dam.2022.08.008)

> <span style="color:teal;">Trial conducted in 2022; patent granted in 2023. </span>[<i class="fas fa-file-circle-check"></i>](https://www.nedo.go.jp/news/press/AA5_101506.html) &nbsp;[<i class="fas fa-file-powerpoint"></i>](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-7294660/15/en)

---

#### Pedestrian Evacuation Simulation and Optimization

![Desktop View](/images/CrowdWalk_Simula.gif){: width="640" }

<span style="font-size: 16px;">歩行者道路網は大規模群集による混雑で事故が発生しやすい．本研究は，ハイブリッド群集モデルとモデル予測制御を組み合わせ，ネットワーク全体の動態を離散・連続の両面から同時に監視・制御する枠組みを考案し，群集分布の均衡維持と飽和リスク低減を求める．</span>

> "<span style="color:orange;">Hybrid modeling and predictive control of large-scale crowd movement in road network</span>". Rongxuan Gao, **Aolong Zha**, Shusuke Shigenaka, Masaki Onishi. In _Proc. of 24th International Conference on Hybrid Systems: Computation and Control_, 2021, pp. 26:1--26:7. &nbsp;[<i class="fas fa-paperclip"></i>](/bibs.html#Gao_Hyb) &nbsp;[<i class="ai ai-doi"></i>](https://doi.org/10.1145/3447928.3456641)

---

#### Optimization for Logistics and Transportation

![Desktop View](/images/Multi-Obj_Opt.gif){: width="360" }

<span style="font-size: 16px;">近年，「物流2024年問題」対策や「カーボンニュートラル実現」に向け，道路輸送から鉄道貨物への転換が進められている．これら二つの輸送モードの組合せによる輸送コストとCO<sub>2</sub>排出量のパレート解を求め，そのトレードオフ関係を明らかにする．</span>

> "<span style="color:orange;">Optimization of transport costs and CO<sub>2</sub> emissions through modal shift to railways using actual shipment amount</span>" (in Japaneses). Hitoshi Hara, **Aolong Zha**, Naoto Imura. _Journal of Japan Logistics Society_, Vol. 32, 2024, pp. 52--62. &nbsp;[<i class="fas fa-paperclip"></i>](/bibs.html#Hara_Opt) &nbsp;[<i class="ai ai-doi"></i>](https://id.ndl.go.jp/bib/033641668)

---

#### Stereo Matching on Embedded GPUs

![Desktop View](/images/KITTI.gif)
![Desktop View](/images/Z2ZNCC.gif)

<span style="font-size: 16px;">計算資源が限られた組み込みGPU向けに最適化されたステレオマッチングフレームワークを考案し，効率的かつ高精度な深度推定を実現する．これにより，リアルタイムでの距離計測や障害物検知など，車載システム・ドローン向け応用場面でも実用的な性能を発揮できる．</span>

> "<span style="color:orange;">Efficient stereo matching on embedded GPUs with zero-means cross correlation</span>". Qiong Chang, **Aolong Zha**, Weimin Wang, Xin Liu, Masaki Onishi, Lei Lei, Tsutomu Maruyama. _Journal of Systems Architecture_, Vol. 123, 2022, p. 102366. &nbsp;[<i class="fas fa-paperclip"></i>](/bibs.html#Chang_Effi) &nbsp;[<i class="ai ai-doi"></i>](https://doi.org/10.1016/j.sysarc.2021.102366)

<!--
---

<br><center><span style="font-size: 24px; color: purple;"><strong>Interdisciplinary Relevance of Contributions</strong></span></center>
<li class="d-flex justify-content-between px-md-4">
<span style="font-size: 18px; color: brown;"><strong>Research</strong></span>
<span style="font-size: 18px; color: brown;"><strong>Fields</strong></span>
<span style="font-size: 18px; color: brown;"><strong>Keywords</strong></span>
</li>

```mermaid
---
config:
  sankey:
    showValues: false
    width: 720
---
sankey-beta

Boolean Satisfiability, Informatics, 55
Real-Time Taxi-Sharing, Informatics, 30
Stereo Matching on GPU, Informatics, 24
Real-Time Taxi-Sharing, Social Informatics, 18
Logistics Optimization, Informatics, 15
Logistics Optimization, Social Informatics, 15
Coalition Structure Generation, Informatics, 15
Pedestrian Evacuation, Social Informatics, 6
Pedestrian Evacuation, Applied Sci. & Eng., 6
Pedestrian Evacuation, Envir. Design, 5
Pedestrian Evacuation, Informatics, 4
Logistics Optimization, Envir. Design, 3
Stereo Matching on GPU, Applied Sci. & Eng., 3
Coalition Structure Generation, Social Informatics, 2

Informatics, Mathematical Logic, 28
Informatics, Knowledge Representation, 26
Informatics, Combinatorial Optimization, 23
Informatics, Search Algorithm, 16
Social Informatics, Simulation, 14
Social Informatics, Operations Research, 12
Informatics, Parallel Computing, 12
Informatics, Computational Complexity, 9
Social Informatics, Economics, 8
Informatics, Auto. Planning & Scheduling, 7
Social Informatics, Transportation, 7
Applied Sci. & Eng., Model Predictive Control, 6
Informatics, GPU Architecture, 6
Envir. Design, Disaster Prevention, 5
Informatics, Multi-Agent System, 4
Envir. Design, Low Carbon Society, 3
Applied Sci. & Eng., Robot Vision, 3
Informatics, Game Theory, 2
Informatics, Network Design, 2
Informatics, Mathematical Programming, 2
Informatics, Machine Learning, 4
Informatics, Cross Reality, 2
```
-->

<!--
```mermaid
---
config:
  sankey:
    showValues: false
    width: 720
---
sankey-beta

Boolean Satisfiability, Informatics, 55
Informatics, Mathematical Logic, 24
Informatics, Search Algorithm, 10
Informatics, Computational Complexity, 6
Informatics, Knowledge Representation, 10
Informatics, Combinatorial Optimization, 5

Coalition Structure Generation, Informatics, 15
Informatics, Mathematical Logic, 1
Informatics, Search Algorithm, 3
Informatics, Computational Complexity, 1
Informatics, Knowledge Representation, 3
Informatics, Combinatorial Optimization, 3
Informatics, Game Theory, 2
Informatics, Multi-Agent System, 2
Coalition Structure Generation, Social Informatics, 2
Social Informatics, Economics, 2

Real-Time Taxi-Sharing, Informatics, 30
Informatics, Mathematical Logic, 3
Informatics, Search Algorithm, 2
Informatics, Computational Complexity, 2
Informatics, Knowledge Representation, 8
Informatics, Combinatorial Optimization, 10
Informatics, Auto. Planning & Scheduling, 5
Real-Time Taxi-Sharing, Social Informatics, 18
Social Informatics, Operations Research, 6
Social Informatics, Transportation, 3
Social Informatics, Simulation, 6
Social Informatics, Economics, 3

Pedestrian Evacuation, Informatics, 4
Informatics, Multi-Agent System, 2
Informatics, Mathematical Programming, 2
Pedestrian Evacuation, Social Informatics, 6
Social Informatics, Transportation, 1
Social Informatics, Simulation, 5
Pedestrian Evacuation, Envir. Design, 5
Envir. Design, Disaster Prevention, 5
Pedestrian Evacuation, Applied Sci. & Eng., 6
Applied Sci. & Eng., Model Predictive Control, 6

Logistics Optimization, Informatics, 15
Informatics, Search Algorithm, 1
Informatics, Knowledge Representation, 5
Informatics, Combinatorial Optimization, 5
Informatics, Auto. Planning & Scheduling, 2
Informatics, Network Design, 2
Logistics Optimization, Social Informatics, 15
Social Informatics, Operations Research, 6
Social Informatics, Transportation, 3
Social Informatics, Simulation, 3
Social Informatics, Economics, 3
Logistics Optimization, Envir. Design, 3
Envir. Design, Low Carbon Society, 3

Stereo Matching on GPU, Informatics, 24
Informatics, GPU Architecture, 6
Informatics, Parallel Computing, 12
Informatics, Machine Learning, 4
Informatics, Cross Reality, 2
Stereo Matching on GPU, Applied Sci. & Eng., 3
Applied Sci. & Eng., Robot Vision, 3
```
-->

