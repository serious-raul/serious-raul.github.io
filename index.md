---
layout: default
title: Home
Home: true
tags:
 - Obrigatórias
 - Eletivas
semana:
 - Segunda
 - Terça
 - Quarta
 - Quinta
 - Sexta
 - Sábado
termos:
 - 2º
 - 4º
 - 6º
---

{% for tag in page.tags %}
### Disciplinas {{ tag }} do Semestre <i class="fas fa-arrow-right"></i>
<div class="allucs customized-scrollbar">
    {% for post in site.tags[tag] %}
        <a class='uc' href="{{ post.url }}">{{ post.title }}</a>
    {% endfor %}
</div>
<br>
{% endfor %}

{% for tag in page.tags %}
### Doscentes das {{ tag }}<i class="fas fa-arrow-right"></i>
<div class="docents customized-scrollbar">
    {% for post in site.tags[tag] %}
        {% for prof in post.professor %}
            {% if existe == true %}
                {% capture professores %}{{ professores }}, {{ prof }}{% endcapture %}
            {% else %}
                {% assign professores = prof %}
                {% assign existe = true %}
            {% endif %}
        {% endfor %}
    {% endfor %}   
    {% assign professores = professores | split: ", " %}
    {% capture professores %}{{ professores | sort | uniq | join: ", " }}{% endcapture %}
    {% assign professores = professores | split: ", " %}
    {% for prof in professores %}
        <div class='prof'>{{ prof }}</div>
    {% endfor %}
    {% assign existe = false %}
    {% assign professores = "" %}
</div>
<br>
{% endfor %}

### Dias da Semana<i class="fas fa-arrow-right"></i>
<div class="semana customized-scrollbar">
    {% for dia in page.semana %}
        <div class='dia'>{{ dia }}</div>
    {% endfor %}
</div>
<br>
### Termo<i class="fas fa-arrow-right"></i>
<div class="semana customized-scrollbar">
    {% for termo in page.termos %}
    <div class='dia'>{{ termo }}</div>
    {% endfor %}
</div>
