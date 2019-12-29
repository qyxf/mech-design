轮系
====

-   轮系的分类：定轴轮系*（所有齿轮轴都固定于机架）*、周转轮系*（至少一个齿轮轴不固定）*、混合轮系*（前二者的组合）*。

-   平面定轴轮系*（轴线相互平行）*与空间定轴轮系*（一般含锥齿轮、蜗杆传动）*。

-    **周转轮系与混合轮系在实质上不能算作两类，只是层次上的划分。**

-   常见概念：双联齿轮*（两个齿轮同轴固结而成的构件，转速相同）*、惰轮*（同时与两个齿轮啮合，只改变速度方向）*。

-   轮系分析的主要目的：

    -   弄清轮系中各部分的传动比*（大小、方向）*；

    -   分析轮系的运动规律*（由对传动比的分析实现）*。

定轴轮系
--------

-   箭头标注规则：

    1.  平行轴外啮合齿轮：箭头方向相反。

    2.  平行轴内啮合齿轮：箭头方向相同。

    3.  锥齿轮：箭头同时朝内或朝外。

    4.  蜗杆传动：按蜗杆传动的方法分析。

-   对平面定轴轮系，以及输入、输出轴平行的轮系，可用传动比中正负号表示输入与输出
    速度的方向是否相同。

-   传动比大小的计算通式：
    $$|i_\text{主,从}|=\left|\frac{n_\text{主}}{n_\text{从}}\right|=\frac{\text{各
        从动轮齿数连乘积}}{\text{各主动轮齿数连乘积}}$$

周转轮系与混合轮系
------------------

-   概念：太阳轮/中心轮*（轴线固定）*、行星轮*（轴线不固定）*、行星架/系杆
    *（连接太阳轮与行星轮之轴）*。

-    **每个周转轮系中有且仅有一个行星架，可通过行星架的数量确定周转轮系数量。**

-   常见周转轮系：行星轮系*（$F=1$）*、差动轮系*（$F=2$）*。

-   周转轮系的速度分析：「反转法」*（与凸轮机构有所相似）*

    -   给系统附加反向的
        $-n_H$，此时行星架固定下来，行星轮仅有自转，转化为一个
        定轴轮系*（原有轮系的转化轮系）*；

    -   传动比应改写为
        $$i'_{12}=\frac{n_1^H}{n_2^H}=\frac{n_1-n_H}{n_2-n_H}=-\frac{z_2}{z_1}$$
        在若干参数已知时可由此方程解出其他参数。

    -   转化轮系中的速度箭头应用虚线表示，实际方向应根据计算结果确定
        [^4]。

-   混合轮系分析流程：分解轮系为若干基本轮系*（通过行星轮对应的行星架确定）*$\to$
    分别分析，列出方程$\to$联立求解。

-   轮系的功用：

    1.  实现较远距离的传动。

    2.  逐级叠加，获得较大传动比。

    3.  通过轮系的组合，实现变速与换向。

    4.   运动分解与合成*（实现运算）*。

    5.  实现分路传动*（用一个原动机实现多重运动）*。

    6.  
        实现特殊的运动轨迹*（旋轮线，包括椭圆、内摆线、纽扣线等）*。

-    「新型」轮系：RV 减速器、谐波齿轮传动等。