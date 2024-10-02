---
layout: post
title: "機械・算法"
date: 2024-09-24 00:00 +0000
categories:
- Algorithms & Data Structures
- 00-Introduction
tags:
- Computability
---
計算を行うためのモデルとして、機械の概念が登場する。機械は計算を実行するための抽象的なモデルであり、その具体的な実装は多岐にわたる。

### 有限オートマトン

**有限オートマトン (Finite automaton)** または**有限状態機械 (finite state machine)** とは、有限個の状態と遷移と動作の組み合わせからなる数学的に抽象化された「ふるまいのモデル」である。機械の典型例としては、デジタル回路やプログラムの設計で使われることがあり、ある一連の状態をとったときどのように論理が流れるかを調べることができる。

#### 定義と例

$$
M=(Q,\Sigma,\delta,q_0,F)
$$

[タプル (Tuple)](https://ja.wikipedia.org/?curid=223490) における $M$ で、$Q$ は状態の集合、$\Sigma$ は入力アルファベット、$\delta: Q \times\Sigma\to Q$ は状態遷移函数、$q_0\in Q$ は初期状態、$F \subseteq Q$ は受理状態の集合である。有限オートマトン $M$ は、**正則言語 (regular language)**を受理する能力を持つ。

$$\Sigma=\{\texttt{a},\texttt{b}\}$$ 上の文字列が与えられ、その中に連続する $3$ 文字として $\texttt{aba}$ が現れるか否か知りたいとしよう。例えば与えられた文字列が $\texttt{abbaabab}$ であるときは条件を満すと判断（受理）し、$\texttt{abbaabba}$ であるときは満さないと判断（不受理）したい。つまり、正則言語

$$
\text{C}{\scriptsize\text{ONTAINS-ABA}}=\{x\in\Sigma^*:xは\texttt{aba}という連続する3文字を含む\}
$$

に属するか否かを正しく区別したいのである。下図のような仕掛を有限状態機械という。[^1]

[^1]: この内容については、河村彰星先生の[「計算量理論　演習問題」](https://www.kurims.kyoto-u.ac.jp/~kawamura/keisanryo/enshu.html)を参考した。

<center>
<script type="text/tikz">
\tikzcdset{
	every label/.append style={font=\large},
	every arrow/.append style={red,thick}
}
\begin{tikzcd}[line width=1pt]
|[shape=circle,draw=red,red,alias=A] | q_0\arrow[loop left,"\texttt{b}"]\arrow[r,"\texttt{a}"] & |[shape=circle,draw=red,red] | q_1\arrow[loop above,"\texttt{a}"]\arrow[r,"\texttt{b}"] & |[shape=circle,draw=red,red,alias=B] | q_2\arrow[l,bend left=30,from=B,to=A]{}{\texttt{b}}\arrow[r,"\texttt{a}"] & |[shape=circle,double=red!50,draw=red,red] | q_3\arrow[loop right,"\texttt{a,b}"]
\end{tikzcd}
</script>
</center>

#### 有限オートマトンの限界

有限オートマトンは眼前の入力に応じて状態を変えるだけの単純な計算機構であった。入力のうち既に読んだ部分については、それを読んだ結果どの状態に至ったかのみを記憶に留め、経緯は忘れてしまう。前例の $Q$ は、現時点でそれぞれ以下の条件が成立つことを表している。

|状態|意味|
|:-:|:-:|
|$q_0$|まだ $\texttt{aba}$ は現れておらず、現時点で最後が $\texttt{a}$ でも $\texttt{ab}$ でもない|
|$q_1$|まだ $\texttt{aba}$ は現れていないが、現時点で最後の数字は $\texttt{a}$ である|
|$q_2$|まだ $\texttt{aba}$ は現れていないが、現時点で最後の二つの数字は $\texttt{ab}$ である|
|$q_3$|既に $\texttt{aba}$ は現れた|

如何に長い文字列を読まされても、この $4$ 通りに分類してさえおけば以後の判断に困らないという。正則言語 $\text{C}{\scriptsize\text{ONTAINS-ABA}}$ の単純さを利用していたといえる。

そのような性質をもたない入力（言語）もあり、有限オートマトンでは認識できない。例えば、$$\Sigma=\{\texttt{a},\texttt{b}\}$$ 上、幾つかの連続した $\texttt{a}$ の後に同数の $\texttt{b}$ が続くという形をした文字列の全体、すなわち

$$
\text{C}{\scriptsize\text{ONTAINS-ANBN}} =\{x\in\Sigma^*:\exists n\in\mathbb{Z}_{>0}, x=\texttt{a}^n\texttt{b}^n\}
$$

がそれである。これを認識するには $\texttt{a}$ の個数を完全に数えねばならず、それは幾らでも大きくなりうるので、状態が有限個では無理である。

### チューリング機械

有限オートマトンは有限のメモリしか持たないモデルであり、**チューリング機械 (Turing machine)**は無限のテープを使って計算を行うモデルである。チューリング機械という概念が計算理論において重要な位置を占め、計算可能性とその限界についての理解が深まる。この後、$1970$ 年代には $\mathcal{NP}$ 完全問題という、特定のクラスの問題に対して効率的なアルゴリズムが存在しない可能性が示唆され、計算理論の分野は大きな進展を見せた。

### アルゴリズム

特定の問題を解決するために機械上で実行される一連の**単純な処理 (primitive computational step)**手順を定めたものを算法（アルゴリズム）という。アルゴリズムの設計は、計算機科学の中で非常に重要な要素であり、特定の入力に対して効率的に解を提供する能力を持つ。
